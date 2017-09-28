owner = @lodging.owner

json.extract! @lodging, :id, :title, :street, :city, :country, :image_url,
              :rate, :room_type, :beds, :bedrooms, :bathrooms, :guests,
              :check_in, :amenities, :bio, :lat, :lng, :district

json.owner do
  json.extract! owner, :first_name, :image_url, :id
end
