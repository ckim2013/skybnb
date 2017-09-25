lodging = @booking.lodging
booker = @booking.booker

json.extract! @booking, :start_date, :end_date, :duration_of_stay

json.lodging do
  json.extract! lodging, :title, :rate
end

json.booker do
  json.extract! booker, :first_name, :image_url
end
