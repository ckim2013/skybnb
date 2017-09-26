lodging = booking.lodging

json.extract! booking, :id, :start_date, :end_date, :duration_of_stay,
              :total_cost

json.lodging do
  json.extract! lodging, :title, :rate, :image_url, :street, :city,
                :country, :beds, :guests, :id
end
