owner = @lodging.owner

json.lodging_detail do
  json.extract! @lodging, :id, :title, :street, :city, :country, :image_url,
  :rate, :room_type, :beds, :bedrooms, :bathrooms, :guests,
  :check_in, :amenities, :bio, :lat, :lng, :district, :average_rating,
  :number_of_ratings

  json.owner do
    json.extract! owner, :first_name, :image_url, :id
  end
end


json.reviews do
  json.array! @lodging.reviews, partial: 'api/reviews/review', as: :review
end
