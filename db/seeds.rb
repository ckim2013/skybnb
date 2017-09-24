# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

LOREM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit
         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit
         anim id est laborum.'


User.create(first_name: 'Guest', last_name: 'Guest',
            email: 'guest@gmail.com', password: 'password')

Lodging.create(owner_id: 1, title: 'Beautiful home in a beautiful city', street: 'Filmore',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_bisaft.jpg', rate: 200, room_type: 'Private Room',
               beds: 2, bedrooms: 3, bathrooms: 2, guests: 3, check_in: '4pm',
               amenities: ['Smoking Allowed'], bio: LOREM)

Lodging.create(owner_id: 1, title: 'A place to get away from it all', street: 'Tehama',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_v8bj6d.jpg', rate: 300, room_type: 'Entire House',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '7pm',
               amenities: ['Patio', 'Pool'],
               bio: 'No seriously, a great place to get away from it all')

Lodging.create(owner_id: 1, title: 'A great place to party!', street: 'Powell',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_zhoqos.jpg', rate: 100, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 3, guests: 4, check_in: '6pm',
               amenities: ['Game console', 'Wheelchair accessible'],
               bio: 'Just look at this place and how beautiful it is!')

Lodging.create(owner_id: 1, title: 'The closest thing to paradise!', street: 'Folsom',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_tf0hmb.jpg', rate: 150, room_type: 'Shared Room',
               beds: 5, bedrooms: 3, bathrooms: 2, guests: 5, check_in: '8pm',
               amenities: ['Kitchen'], bio: 'Family handed this down to me!')

Lodging.create(owner_id: 1, title: 'A nice guesthouse in my backyard', street: '6th',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_ptcmge.jpg', rate: 250, room_type: 'Private Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm',
               amenities: ['Wifi', 'Breakfast'], bio: 'Better than any other place, trust me')

Lodging.create(owner_id: 1, title: 'A place to unwind', street: 'Lorem',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_gbgs2y.jpg', rate: 325, room_type: 'Entire House',
               beds: 2, bedrooms: 1, bathrooms: 1, guests: 2, check_in: '6pm',
               amenities: ['Iron'])

Lodging.create(owner_id: 1, title: 'Sorry, this house aint for sale :)', street: 'Foo',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_vwlo97.jpg', rate: 120, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '8pm',
               bio: 'No amenities but this house is still amazing!')

Lodging.create(owner_id: 1, title: 'Cute home in a cute part of the city', street: 'Bar',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_uxfvtd.jpg', rate: 80, room_type: 'Shared Room',
               beds: 6, bedrooms: 6, bathrooms: 4, guests: 6, check_in: '9pm',
               amenities: ['Hot Tub', 'Pool'], bio: 'This place is always the hottest spot in town')
