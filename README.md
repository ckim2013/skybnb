# SKYbNb
[Live](https://skybnb-fullstack.herokuapp.com/#/)
SKYbNb is a full-stack web application that is heavily inspired by Airbnb. The app allows a user to sign up, login, create or edit lodgings, make bookings to other hosts' lodgings, and leave reviews. There is also a dynamic search bar that renders lodgings in specific districts.

## Screenshots
![image of index](docs/index_page.gif)
___
![image of creating lodging](docs/creating_lodging.gif)
___
![image of map to show](docs/map_to_show.gif)
___
![image of booking](docs/booking.gif)

## Current Features
### Creating/Logging in a User
On every page of the web-application, there is a `navbar` on the top that allows a person to login, logout, or build a lodging. There is also a search bar for lodgings which only appears when the person is in the main page.

### Lodgings
In the backend, the lodgings are stored in a `lodgings` table with a range of columns including street, city, country, longitudes, and latitudes. Lodgings are listed alongside a google map component in the main page. A user is able to go his/her own lodging's show page and be able to see buttons to edit the lodging or delete it. Any other logged in user viewing the same lodging show page will not be able to see the delete and edit button. Creating and editing a lodging uses the same form component. After creating or editing a lodging, the user is redirected to the lodging's show page with the newly added attributes. If the user created a lodging, the lodging will appear in the main page with it's coordinates pinned on the google map.

The lodging form has fields for street, city, and country. Before the form sends data to the backend, these fields are combined into a string and then geocoded using the google map API. Upon receipt of a response, a callback is evoked that extracts the longitudes and latitudes of the response. In the same callback, the local state of the form is set with the newly extracted `lat`, `lng`, `district` which then evokes another callback that finally sends the data to the backend. The whole purpose of this is to prevent having the user input the latitudes and longitudes of the lodgings (this would be extremely tedious).

```javascript
const geocoder = new google.maps.Geocoder();
const address = this.state.street + ', ' + this.state.city + ', ' +
              this.state.country;

if (this.state.street === '' || this.state.city === '' ||
    this.state.country === '') {
      this.props.action(this.state);
    }

geocoder.geocode({ address }, data => {
  const lat = data[0].geometry.location.lat();
  const lng = data[0].geometry.location.lng();
  const district = data[0].address_components[2].long_name;
  this.setState({ lat, lng, district }, () => {
    this.props.action(this.state)
    .then(resp => this.props.history.push(`/lodgings/${resp.lodging.lodging_detail.id}`));
  });
});
```

There are associations for the lodgings which means that if a lodging was deleted, all the reviews and bookings would be deleted as well.


### Bookings
There is a `bookings` table that has the author ID, lodging ID, start date, and end date columns. A user is only able to see the booking form on each lodging if he/she is logged in. There are backend validations that prevent the user from booking his/her own lodging, booking in the past, having the end date before the start date, and booking overlapping requests from the same or different users. Three of these validations are seen in the lodging model.

```ruby
def start_date_after_end_date
  unless (self.start_date <=> self.end_date) == -1
    errors[:base] << 'Start date must be after end date'
  end
end

def after_current_date
  if self.start_date
    unless self.start_date >= Date.today
      errors[:base] << 'Time travel exists?'
    end
  end
end

def ensure_no_overlapping_bookings
  unless overlapping_bookings.empty?
    errors[:base] << 'Time range has already been booked!'
  end
end

def overlapping_bookings
  Booking
    .where.not(id: self.id)
    .where(lodging_id: lodging_id)
    .where(<<-SQL, start_date: start_date, end_date: end_date)
      NOT( (start_date > :end_date) OR (end_date < :start_date) )
    SQL
end
```

The other validation is seen in the controller.
```ruby
def create
  @booking = current_user.bookings.new(booking_params)
  lodging = Lodging.find_by(id: @booking.lodging_id)
  if @booking.booker_id == lodging.owner_id
    render json: ['Cannot book your own place!'], status: :unprocessable_entity
  elsif @booking.save
    render :show
  else
    render json: @booking.errors.full_messages, status: :unprocessable_entity
  end
end
```
After the user creates a booking, he/she can look in the navbar and click on the bookings button which shows all of the bookings for that user only. There is a time delay of 500ms so the user can type quickly what he/she is looking for which then searches for those lodgings.

### Google Map API and Lodging Search
This feature was the most challenging because I was initially not familiar with the google map API. However, it proved to be a rewarding experience after seeing the markers of the lodgings show up on the map. Before this phase of the project, the lodging index container fetched all of the lodgings when the component first mounts. This task of fetching the lodgings was eventually given to the google map component. An event listener for `idle` is implemented so that when a user pans or zooms on the map, a new fetch request is evoked, bringing back only the lodgings within the boundaries of the map.

```javascript
return google.maps.event.addListener(this.map, 'idle', () => {
  const { north, south, east, west } = this.map.getBounds().toJSON();
  const bounds = {
    northEast: { lat: north, lng: east },
    southWest: { lat: south, lng: west }
  };
  this.props.updateBounds(bounds);
```
### Reviews
There is a `reviews` table that holds the lodging id and the author id. Only a signed in user can make reviews. There are validations in place that prevent the user from reviewing his/her own page as seen in the controller for create.

```ruby
def create
  @review = current_user.reviews.new(review_params)
  if !(current_user.lodgings.find_by(id: params[:review][:lodging_id]) == nil)
    render json: ['You cannot review your own place!'], status: :unprocessable_entity
  elsif @review.save
    render :show
  else
    render json: @review.errors.full_messages, status: :unprocessable_entity
  end
end
```
The user cannot delete or edit the review. Airbnb is somewhat similar in that deletion or editing cannot happen once the lodging owner writes a review back. This feature can be implemented in the future.

### Future Direction
What could be implemented in the future is the ability to view profiles of users. The profile would contain reviews of that person along with his/her owned lodgings.

What also can be done is make the google map api jump to the spot of the neighborhood/district inputed into the search bar. What can also be done is make the full address not viewable to a user (not the lodging owner) and have the google maps display circles rather than markers so that other users do not know where exactly the lodging is until the booking occurs.   
