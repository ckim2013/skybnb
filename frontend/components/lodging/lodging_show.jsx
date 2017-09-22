import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

class LodgingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("inside component will mount");
    this.props.fetchLodging(this.props.match.params.lodgingId)
    .then(() => this.setState({ loading: false }));
  }

  // componentWillReceiveProps will be needed if I physically change
  // the url to view a lodging.
  componentWillReceiveProps(newProps) {
    console.log("inside receive props");
    console.log(this.props);
    console.log(newProps);
    if (this.props.match.params.lodgingId !==
        newProps.match.params.lodgingId) {
          this.props.fetchLodging(newProps.match.params.lodgingId);
        }
  }

  render() {

    if (this.state.loading === true) {
      return (
        <h2>LOADING</h2>
      );
    }

    let { title, street, city, country, owner,
            room_type, guests, bedrooms, beds,
            bio, bathrooms, check_in, amenities, rate } = this.props.lodging;

    return (
      <div className="lodging-show-container">
          <Image publicId={this.props.lodging.image_url} cloudName="skybnb" >
            <Transformation width="1680" height="1000" crop="scale" />
          </Image>
        <div className='lodging-profile-container'>
          <div className='lodging-profile'>
            <div className='lodging-profile-intro'>
              <h1>{this.props.lodging.title}</h1>
              <p>{street}, {city}, {country}</p>
              <p>{owner.first_name}</p>
            </div>

            <div className='lodging-profile-icons'>
              <ul>
                <li>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  { room_type }
                </li>
                <li>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  { guests } guest(s)
                </li>
                <li>
                  <i className="fa fa-building" aria-hidden="true"></i>
                  { bedrooms } bedroom(s)
                </li>
                <li>
                  <i className="fa fa-bed" aria-hidden="true"></i>
                  { beds } bed(s)
                </li>
              </ul>
            </div>

            <div className='lodging-profile-bio'>
              <h2>Please come in!</h2>
              <p>{ bio }</p>
            </div>

            <div className='lodging-profile-space'>
              <h2>Space</h2>
              <ul>
                <li>
                  Bathrooms: { bathrooms }
                </li>
                <li>
                  Bedrooms: { bedrooms }
                </li>
                <li>
                  Beds: { beds }
                </li>
                <li>
                  Check In: { check_in }
                </li>
              </ul>
            </div>

            <div className='lodging-profile-amenities'>
              <h2>Amenities</h2>
              <ul>
                { amenities.map(amenity => <li>{ amenity }</li>)}
              </ul>
            </div>

            <div className='lodging-profile-amenities'>
              <h2>Pricing!</h2>
              <span>${ rate } per night!</span>
            </div>

            <div className='lodging-profile-cancellation'>
              <h2>Cancellation (Try not to!)</h2>
              <p>
                Cancel up to 5 days before check in and get a full refund
                (minus service fees). Cancel within 5 days of your trip and
                the first night is non-refundable, but 50% of the cost for
                the remaining nights will be refunded. Service fees are
                refunded when cancellation happens before check in and within
                48 hours of booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default LodgingShow;
