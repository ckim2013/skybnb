owner = @lodging.owner

json.extract! @lodging, :id, :title, :street, :city, :country, :image_url,
              :rate, :room_type, :beds, :bedrooms, :bathrooms, :guests,
              :check_in, :amenities, :bio

json.owner do
  json.extract! owner, :first_name, :last_name, :image_url
end
