# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(first_name: 'Guest', last_name: 'Guest',
            email: 'guest@gmail.com', password: 'password')

user2 = User.create(first_name: 'Chris', last_name: 'Kim',
            email: 'chris@gmail.com', password: 'password')

user3 = User.create(first_name: 'Chester', last_name: 'Tester',
            email: 'chester@gmail.com', password: 'password')

user4 = User.create(first_name: 'Katrina', last_name: 'Lui',
            email: 'katrina@gmail.com', password: 'password')

user5 = User.create(first_name: 'Kenta', last_name: 'Kodama',
            email: 'kenta@gmail.com', password: 'password')

user6 = User.create(first_name: 'Andres', last_name: 'Alfaro',
            email: 'andres@gmail.com', password: 'password')

user7 = User.create(first_name: 'Carmen', last_name: 'To',
            email: 'carmen@gmail.com', password: 'password')

user8 = User.create(first_name: 'Ryan', last_name: 'Mapa',
            email: 'ryan@gmail.com', password: '123456')


Lodging.destroy_all
lodging1 = Lodging.create(owner_id: user1.id, title: 'Beautiful home in a beautiful city', street: '1080 Folsom',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_bisaft.jpg', rate: 250, room_type: 'Private Room',
               beds: 2, bedrooms: 3, bathrooms: 2, guests: 3, check_in: '5PM',
               amenities: ['Smoking Allowed'], bio: 'We love lorems in this house',
               lat: 37.777243, lng: -122.407609, district: 'South of Market')

lodging2 = Lodging.create(owner_id: user1.id, title: 'A place to get away from it all', street: '431 Tehama',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_v8bj6d.jpg', rate: 300, room_type: 'Entire House',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '7AM',
               amenities: ['Patio', 'Pool'],
               bio: 'No seriously, a great place to get away from it all',
               lat: 37.780360, lng: -122.405042, district: 'South of Market')

lodging3 = Lodging.create(owner_id: user2.id, title: 'A great place to party!', street: '865 Market',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_zhoqos.jpg', rate: 100, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 3, guests: 4, check_in: '5AM',
               amenities: ['Game console', 'Wheelchair accessible'],
               bio: 'Just look at this place and how beautiful it is!',
               lat: 37.784118, lng: -122.406435, district: 'South of Market')

lodging4 = Lodging.create(owner_id: user6.id, title: 'The closest thing to paradise!', street: '825 Battery',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_tf0hmb.jpg', rate: 150, room_type: 'Shared Room',
               beds: 5, bedrooms: 3, bathrooms: 2, guests: 5, check_in: '8PM',
               amenities: ['Kitchen'], bio: 'Family handed this down to me!',
               lat: 37.798967, lng: -122.401352, district: 'North Beach')

lodging5 = Lodging.create(owner_id: user3.id, title: 'A nice guesthouse in my backyard', street: '1001 Potrero',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_ptcmge.jpg', rate: 250, room_type: 'Private Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6PM',
               amenities: ['Wifi', 'Breakfast'], bio: 'Better than any other place, trust me',
               lat: 37.755805, lng: -122.404443, district: 'Mission District')

lodging6 = Lodging.create(owner_id: user5.id, title: 'A place to unwind', street: '201 Berry St',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_gbgs2y.jpg', rate: 325, room_type: 'Entire House',
               beds: 2, bedrooms: 1, bathrooms: 1, guests: 2, check_in: '6PM',
               amenities: ['Iron'], bio: 'Right next to the bay!', lat: 37.775535,
               lng: -122.393421, district: 'South of Market')

lodging7 = Lodging.create(owner_id: user2.id, title: 'Sorry, this house aint for sale :)', street: '888 Howard',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_vwlo97.jpg', rate: 120, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '8PM',
               bio: 'No amenities but this house is still amazing!', lat: 37.782055,
               lng: -122.404741, district: 'South of Market')

lodging8 = Lodging.create(owner_id: user8.id, title: 'Cute home in a cute part of the city', street: '2 New Montgomery',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_uxfvtd.jpg', rate: 80, room_type: 'Shared Room',
               beds: 6, bedrooms: 6, bathrooms: 4, guests: 6, check_in: '9PM',
               amenities: ['Hot Tub', 'Patio'], bio: 'This place is always the hottest spot in town',
               lat: 37.787975, lng: -122.401926, district: 'South Beach')
# WORK TO BELOW
lodging9 = Lodging.create(owner_id: user5.id, title: 'Very cheap place in this city!', street: '1 Dr Carlton B Goodlett Pl',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/kx9vw6jyc8pxxp22xl7l.jpg', rate: 9000, room_type: 'Shared Room',
               beds: 2, bedrooms: 1, bathrooms: 1, guests: 2, check_in: '10PM',
               amenities: ['Iron'], bio: 'You will not be able to find a cheaper place than this',
               lat: 37.779260, lng: -122.419265, district: 'Civic Center')

lodging10 = Lodging.create(owner_id: user3.id, title: 'Please book this place', street: '2125 Chestnut St',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lrthtv.jpg', rate: 55, room_type: 'Private Room',
               beds: 3, bedrooms: 2, bathrooms: 2, guests: 4, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'I reallllyyyy need the money',
               lat: 37.800346, lng: -122.438337, district: 'Marina District')

lodging11 = Lodging.create(owner_id: user1.id, title: 'No no, please book this place instead!', street: '940 Hayes St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/scott-webb-251878.jpg', rate: 78, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 4, guests: 4, check_in: '9AM',
               amenities: ['Kitchen', 'Hot Tub', 'Pool', 'Childen Allowed'], bio: 'Please book this place :(
               I need the money', lat: 37.776012, lng: -122.432054, district: 'Alamo Square')

lodging12 = Lodging.create(owner_id: user3.id, title: 'Pretty place with many flowers', street: '535 Scott St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/pietro-de-grandi-149555.jpg', rate: 70, room_type: 'Private Room',
               beds: 2, bedrooms: 2, bathrooms: 2, guests: 3, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'Many many flowers are scattered about.',
               lat: 37.774777, lng: -122.436303, district: 'Western Addition')

lodging13 = Lodging.create(owner_id: user6.id, title: 'We have a lot of cats in here', street: '707 Clement St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/lance-anderson-378247.jpg', rate: 500, room_type: 'Entire House',
               beds: 1, bedrooms: 2, bathrooms: 3, guests: 2, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'We hope you like cats! There is a bunch.',
               lat: 37.782663, lng: -122.466833, district: 'Richmond District')

lodging14 = Lodging.create(owner_id: user3.id, title: 'Quiet place to be alone', street: '4625 Geary Blvd',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/jaroslaw-ceborski-250955.jpg', rate: 300, room_type: 'Entire House',
               beds: 1, bedrooms: 2, bathrooms: 1, guests: 1, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'Let us be loners together...',
               lat: 37.780513, lng: -122.469029, district: 'Richmond District')

lodging15 = Lodging.create(owner_id: user2.id, title: 'A loud place to be social', street: '429 Castro St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/evelyn-paris-95853.jpg', rate: 200, room_type: 'Shared Room',
               beds: 4, bedrooms: 4, bathrooms: 4, guests: 10, check_in: '8AM',
               amenities: ['Game console', 'Pool'], bio: 'Let us be social together!!!',
               lat: 37.762033, lng: -122.434759, district: 'The Castro')

lodging16 = Lodging.create(owner_id: user5.id, title: 'We have a/c for a lit city', street: '2340 Chestnut St',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/derek-thomson-274245.jpg', rate: 100, room_type: 'Shared Room',
               beds: 3, bedrooms: 2, bathrooms: 1, guests: 3, check_in: '8AM',
               amenities: ['Air Conditioning', 'Pool', 'Smoking Allowed'], bio: 'Come by
               and let us enjoy the a/c together!',
               lat: 37.800377, lng: -122.441968, district: 'Marina District')

lodging17 = Lodging.create(owner_id: user7.id, title: 'A huge place for friends', street: '15 Marina Blvd',
               city: 'San Francisco', country: 'United States',
               image_url: 'lodgings/david-cohen-134252.jpg', rate: 33, room_type: 'Entire House',
               beds: 10, bedrooms: 10, bathrooms: 10, guests: 10, check_in: '8AM',
               amenities: ['Hot Tub', 'Pool'], bio: 'Let us be friends forever! If you book.',
               lat: 37.804456, lng: -122.432827, district: 'Marina District')

Review.destroy_all
review1 = Review.create(lodging_id: lodging1.id, author_id: user2.id, title: 'Really cool place', body: 'This place is amazing,
              go support this guy, his place is very very cool!', rating: 5)

review2 = Review.create(lodging_id: lodging1.id, author_id: user5.id, title: 'Not really a cool place', body: 'I think the person above me got paid
              to write this review. This place was horrible!', rating: 2)

review3 = Review.create(lodging_id: lodging10.id, author_id: user4.id, title: 'Cold...', body: 'The a/c was on full blast and the windows
              were all open! Do not come here!', rating: 2)

review4 = Review.create(lodging_id: lodging11.id, author_id: user6.id, title: 'Great host', body: 'The host was very friendly and very accomadating.
              2 stars since 1 is the best and this was not the best of course!', rating: 2)

review5 = Review.create(lodging_id: lodging3.id, author_id: user6.id, title: 'Creepy', body: 'Why were there things that looked like cameras all over the house?',
              rating: 2)

review6 = Review.create(lodging_id: lodging3.id, author_id: user4.id, title: 'Needs better wifi', body: 'I could not get the wifi to work on my laptop!',
              rating: 2)

review7 = Review.create(lodging_id: lodging2.id, author_id: user7.id, title: 'Average at best', body: 'The place was dull. Dull furniture, dull
              lighting, dull everything!', rating: 3)

review8 = Review.create(lodging_id: lodging7.id, author_id: user7.id, title: 'Best place in the world', body: 'I partied like crazy and the host was
              totally cool with it!', rating: 5)

review9 = Review.create(lodging_id: lodging11.id, author_id: user3.id, title: 'Small but cute', body: 'Very cute interior but it was a litte small. Still
              enjoyed my stay.', rating: 4)

review10 = Review.create(lodging_id: lodging8.id, author_id: user2.id, title: 'Herp derp', body: 'herpy derp',
              rating: 5)

review11 = Review.create(lodging_id: lodging13.id, author_id: user3.id, title: 'Place is a little tilted', body: 'Which makes me tilted >:(', rating: 2)

review12 = Review.create(lodging_id: lodging16.id, author_id: user6.id, title: 'Amazing', body: 'The pool is a nice touch for a hot day', rating: 5)

review13 = Review.create(lodging_id: lodging17.id, author_id: user1.id, title: 'Beautiful lake', body: 'There is a lake outside with a gorgeous view!',
              rating: 5)

review14 = Review.create(lodging_id: lodging15.id, author_id: user5.id, title: 'Too expensive', body: 'So many hidden charges!', rating: 1)

review15 = Review.create(lodging_id: lodging4.id, author_id: user2.id, title: 'Too white inside', body: 'The walls are blinding!!!', rating: 1)

review16 = Review.create(lodging_id: lodging5.id, author_id: user2.id, title: 'The computer is amazing', body: 'Very hightech with a nice wifi', rating: 4)

review17 = Review.create(lodging_id: lodging6.id, author_id: user8.id, title: 'Pool!!!', body: 'There is an amazing pool table inside and a minibar!', rating: 5)

review18 = Review.create(lodging_id: lodging14.id, author_id: user4.id, title: 'The furry couch', body: 'The couch was ok but a little too furry', rating: 3)

review19 = Review.create(lodging_id: lodging12.id, author_id: user4.id, title: 'Too blue', body: 'The place is too blue, making me depressed', rating: 2)
