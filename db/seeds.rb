# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'Guest', last_name: 'Guest',
            email: 'guest@gmail.com', password: 'password')

Lodging.create(owner_id: 1, title: 'Beautiful home in a beautiful city', street: '1080 Folsom',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_bisaft.jpg', rate: 200, room_type: 'Private Room',
               beds: 2, bedrooms: 3, bathrooms: 2, guests: 3, check_in: '4pm',
               amenities: ['Smoking Allowed'], bio: 'We love lorems in this house',
               lat: 37.777243, lng: -122.407609)

Lodging.create(owner_id: 1, title: 'A place to get away from it all', street: '431 Tehama',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_v8bj6d.jpg', rate: 300, room_type: 'Entire House',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '7pm',
               amenities: ['Patio', 'Pool'],
               bio: 'No seriously, a great place to get away from it all',
               lat: 37.780360, lng: -122.405042)

Lodging.create(owner_id: 1, title: 'A great place to party!', street: '865 Market',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_zhoqos.jpg', rate: 100, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 3, guests: 4, check_in: '6pm',
               amenities: ['Game console', 'Wheelchair accessible'],
               bio: 'Just look at this place and how beautiful it is!',
               lat: 37.784118, lng: -122.406435)

Lodging.create(owner_id: 1, title: 'The closest thing to paradise!', street: '825 Battery',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_tf0hmb.jpg', rate: 150, room_type: 'Shared Room',
               beds: 5, bedrooms: 3, bathrooms: 2, guests: 5, check_in: '8pm',
               amenities: ['Kitchen'], bio: 'Family handed this down to me!',
               lat: 37.798967, lng: -122.401352)

Lodging.create(owner_id: 1, title: 'A nice guesthouse in my backyard', street: '1001 Potrero',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_ptcmge.jpg', rate: 250, room_type: 'Private Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm',
               amenities: ['Wifi', 'Breakfast'], bio: 'Better than any other place, trust me',
               lat: 37.755805, lng: -122.404443)

Lodging.create(owner_id: 1, title: 'A place to unwind', street: '201 Berry St',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_gbgs2y.jpg', rate: 325, room_type: 'Entire House',
               beds: 2, bedrooms: 1, bathrooms: 1, guests: 2, check_in: '6pm',
               amenities: ['Iron'], bio: 'Right next to the bay!', lat: 37.775535,
               lng: -122.393421)

Lodging.create(owner_id: 1, title: 'Sorry, this house aint for sale :)', street: '888 Howard',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_vwlo97.jpg', rate: 120, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '8pm',
               bio: 'No amenities but this house is still amazing!', lat: 37.782055,
               lng: -122.404741)

Lodging.create(owner_id: 1, title: 'Cute home in a cute part of the city', street: '2 New Montgomery',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_uxfvtd.jpg', rate: 80, room_type: 'Shared Room',
               beds: 6, bedrooms: 6, bathrooms: 4, guests: 6, check_in: '9pm',
               amenities: ['Hot Tub', 'Pool'], bio: 'This place is always the hottest spot in town',
               lat: 37.787975, lng: -122.401926)
