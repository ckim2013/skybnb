# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'Guest', last_name: 'Guest',
            email: 'guest@gmail.com', password: 'password')

Lodging.create(owner_id: 1, title: 'a/A', street: 'Filmore',
               city: 'San Francisco', country: 'United States',
               image_url: 'http://res.cloudinary.com/ckim2013/image/upload/c_limit,h_500,w_300/v1506012379/download_mfka5x.jpg', rate: 200, room_type: 'Shared Room',
               beds: 1, bedrooms: 1, bathrooms: 1, guests: 1, check_in: '6pm')
