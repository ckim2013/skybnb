# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'Guest', last_name: 'Guest',
            email: 'guest@gmail.com', password: 'password')

Lodging.create(owner_id: 1, title: 'Latitude38', street: 'Filmore',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 200, room_type: 'Private Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')

Lodging.create(owner_id: 1, title: 'a/A', street: 'Tehama',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 300, room_type: 'Entire House',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')

Lodging.create(owner_id: 1, title: 'HackReactor', street: 'Powell',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 100, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')

Lodging.create(owner_id: 1, title: 'Flatiron', street: 'Folsom',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 150, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')

Lodging.create(owner_id: 1, title: 'guesthouse', street: '6th',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 250, room_type: 'Private Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')

Lodging.create(owner_id: 1, title: 'Lorem', street: 'Lorem',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 325, room_type: 'Entire House',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')

Lodging.create(owner_id: 1, title: 'Foo', street: 'Foo',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 120, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')

Lodging.create(owner_id: 1, title: 'Bar', street: 'Bar',
               city: 'San Francisco', country: 'United States',
               image_url: 'download_lbgkc0.jpg', rate: 80, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')
