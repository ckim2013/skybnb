@lodgings.each do |lodging|
  json.set! lodging.id do
    json.extract! lodging, :id, :rate, :title, :street, :city, :country,
                  :room_type, :beds, :image_url, :owner_id, :lat, :lng,
                  :average_rating
  end
  # Why do I need owner_id?
end
