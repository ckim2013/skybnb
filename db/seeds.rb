# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'Guest', last_name: 'Guest',
            email: 'guest@gmail.com', password: 'password')

User.create(first_name: 'Chris', last_name: 'Kim',
            email: 'chris@gmail.com', password: 'password')

User.create(first_name: 'Chester', last_name: 'Tester',
            email: 'chester@gmail.com', password: 'password')

User.create(first_name: 'Katrina', last_name: 'Lui',
            email: 'katrina@gmail.com', password: 'password')

User.create(first_name: 'Kenta', last_name: 'Kodama',
            email: 'kenta@gmail.com', password: 'password')

User.create(first_name: 'Andres', last_name: 'Alfaro',
            email: 'andres@gmail.com', password: 'password')

User.create(first_name: 'Carmen', last_name: 'To',
            email: 'carmen@gmail.com', password: 'password')

User.create(first_name: 'Ryan', last_name: 'Mapa',
            email: 'ryan@gmail.com', password: '123456')

Lodging.create(owner_id: 1, title: 'Beautiful home in a beautiful city', street: '1080 Folsom',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_bisaft.jpg', rate: 250, room_type: 'Private Room',
               beds: 2, bedrooms: 3, bathrooms: 2, guests: 3, check_in: '5PM',
               amenities: ['Smoking Allowed'], bio: 'We love lorems in this house',
               lat: 37.777243, lng: -122.407609, district: 'Central East')

Lodging.create(owner_id: 1, title: 'A place to get away from it all', street: '431 Tehama',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_v8bj6d.jpg', rate: 300, room_type: 'Entire House',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '7AM',
               amenities: ['Patio', 'Pool'],
               bio: 'No seriously, a great place to get away from it all',
               lat: 37.780360, lng: -122.405042, district: 'Central East')

Lodging.create(owner_id: 2, title: 'A great place to party!', street: '865 Market',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_zhoqos.jpg', rate: 100, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 3, guests: 4, check_in: '5AM',
               amenities: ['Game console', 'Wheelchair accessible'],
               bio: 'Just look at this place and how beautiful it is!',
               lat: 37.784118, lng: -122.406435, district: 'Central East')

Lodging.create(owner_id: 6, title: 'The closest thing to paradise!', street: '825 Battery',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_tf0hmb.jpg', rate: 150, room_type: 'Shared Room',
               beds: 5, bedrooms: 3, bathrooms: 2, guests: 5, check_in: '8PM',
               amenities: ['Kitchen'], bio: 'Family handed this down to me!',
               lat: 37.798967, lng: -122.401352, district: 'Northeast')

Lodging.create(owner_id: 3, title: 'A nice guesthouse in my backyard', street: '1001 Potrero',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_ptcmge.jpg', rate: 250, room_type: 'Private Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6PM',
               amenities: ['Wifi', 'Breakfast'], bio: 'Better than any other place, trust me',
               lat: 37.755805, lng: -122.404443, district: 'Central East')

Lodging.create(owner_id: 5, title: 'A place to unwind', street: '201 Berry St',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_gbgs2y.jpg', rate: 325, room_type: 'Entire House',
               beds: 2, bedrooms: 1, bathrooms: 1, guests: 2, check_in: '6PM',
               amenities: ['Iron'], bio: 'Right next to the bay!', lat: 37.775535,
               lng: -122.393421, district: 'Central East')

Lodging.create(owner_id: 2, title: 'Sorry, this house aint for sale :)', street: '888 Howard',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_vwlo97.jpg', rate: 120, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '8PM',
               bio: 'No amenities but this house is still amazing!', lat: 37.782055,
               lng: -122.404741, district: 'Central East')

Lodging.create(owner_id: 8, title: 'Cute home in a cute part of the city', street: '2 New Montgomery',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_uxfvtd.jpg', rate: 80, room_type: 'Shared Room',
               beds: 6, bedrooms: 6, bathrooms: 4, guests: 6, check_in: '9PM',
               amenities: ['Hot Tub', 'Patio'], bio: 'This place is always the hottest spot in town',
               lat: 37.787975, lng: -122.401926, district: 'Central East')
# WORK TO BELOW
Lodging.create(owner_id: 5, title: 'Very cheap place in this city!', street: '1 Dr Carlton B Goodlett Pl',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/kx9vw6jyc8pxxp22xl7l.jpg', rate: 9000, room_type: 'Shared Room',
               beds: 2, bedrooms: 1, bathrooms: 1, guests: 2, check_in: '10PM',
               amenities: ['Iron'], bio: 'You will not be able to find a cheaper place than this',
               lat: 37.779260, lng: -122.419265, district: 'Northeast')

Lodging.create(owner_id: 3, title: 'Please book this place', street: '2125 Chestnut St',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lrthtv.jpg', rate: 55, room_type: 'Private Room',
               beds: 3, bedrooms: 2, bathrooms: 2, guests: 4, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'I reallllyyyy need the money',
               lat: 37.800346, lng: -122.438337, district: 'North')

Lodging.create(owner_id: 1, title: 'No no, please book this place instead!', street: '940 Hayes St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/scott-webb-251878.jpg', rate: 78, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 4, guests: 4, check_in: '9AM',
               amenities: ['Kitchen', 'Hot Tub', 'Pool', 'Childen Allowed'], bio: 'Please book this place :(
               I need the money', lat: 37.776012, lng: -122.432054, district: 'Central North')

Lodging.create(owner_id: 3, title: 'Pretty place with many flowers', street: '535 Scott St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/pietro-de-grandi-149555.jpg', rate: 70, room_type: 'Private Room',
               beds: 2, bedrooms: 2, bathrooms: 2, guests: 3, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'Many many flowers are scattered about.',
               lat: 37.774777, lng: -122.436303, district: 'Central North')

Lodging.create(owner_id: 6, title: 'We have a lot of cats in here', street: '707 Clement St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/lance-anderson-378247.jpg', rate: 500, room_type: 'Entire House',
               beds: 1, bedrooms: 2, bathrooms: 3, guests: 2, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'We hope you like cats! There is a bunch.',
               lat: 37.782663, lng: -122.466833, district: 'Northwest')

Lodging.create(owner_id: 3, title: 'Quiet place to be alone', street: '4625 Geary Blvd',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/jaroslaw-ceborski-250955.jpg', rate: 300, room_type: 'Entire House',
               beds: 1, bedrooms: 2, bathrooms: 1, guests: 1, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'Let us be loners together...',
               lat: 37.780513, lng: -122.469029, district: 'Northwest')

Lodging.create(owner_id: 2, title: 'A loud place to be social', street: '429 Castro St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/evelyn-paris-95853.jpg', rate: 200, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 4, guests: 10, check_in: '8AM',
               amenities: ['Game console', 'Pool'], bio: 'Let us be social together!!!',
               lat: 37.762033, lng: -122.434759, district: 'Central North')

Lodging.create(owner_id: 5, title: 'We have a/c for a lit city', street: '2340 Chestnut St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/derek-thomson-274245.jpg', rate: 100, room_type: 'Shared Room',
               beds: 3, bedrooms: 2, bathrooms: 1, guests: 3, check_in: '8AM',
               amenities: ['Air Conditioning', 'Pool', 'Smoking Allowed'], bio: 'Come by
               and let us enjoy the a/c together!',
               lat: 37.800377, lng: -122.441968, district: 'North')

Lodging.create(owner_id: 7, title: 'A huge place for friends', street: '15 Marina Blvd',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/david-cohen-134252.jpg', rate: 33, room_type: 'Entire House',
               beds: 10, bedrooms: 10, bathrooms: 10, guests: 10, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'Let us be friends forever! If you book.',
               lat: 37.804456, lng: -122.432827, district: 'North')

Review.create(lodging_id: 1, author_id: 2, title: 'Really cool place', body: 'This place is amazin,
              go support this guy, his place is very very cool!', rating: 5)

Review.create(lodging_id: 1, author_id: 3, title: 'Not really a cool place', body: 'I think the person above me got paid
              to write this review. This place was horrible!', rating: 2)
