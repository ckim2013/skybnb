@lodgings.each do |lodging|
  json.set! lodging.id do
    json.extract! lodging, :id, :rate, :title, :city, :country,
                  :room_type, :beds, :image_url, :owner_id;
  end
  # Might need amenities?
end
