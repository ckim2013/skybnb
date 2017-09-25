export const getBookings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings'
  })
);

export const getBooking = id => (
  $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`
  })
);

export const postBooking = booking => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: { booking }
  })
);

export const deleteBooking = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`
  })
);
