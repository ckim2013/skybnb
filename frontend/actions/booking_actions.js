import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_SINGLE_BOOKING = 'RECEIVE_SINGLE_BOOKING';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const START_LOADING_ALL_BOOKINGS = 'START_LOADING_ALL_BOOKINGS';
// export const START_LOADING_SINGLE_BOOKING = 'START_LOADING_SINGLE_BOOKING';

export const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

export const receiveSingleBooking = booking => ({
  type: RECEIVE_SINGLE_BOOKING,
  booking
});

export const deleteBooking = booking => ({
  type: DELETE_BOOKING,
  booking
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const startLoadingAllBookings = () => ({
  type: START_LOADING_ALL_BOOKINGS
});

// export const startLoadingSingleBooking = () => ({
//   type: START_LOADING_SINGLE_BOOKING
// });

export const fetchAllBookings = () => dispatch => {
  dispatch(startLoadingAllBookings());
  return BookingApiUtil.getBookings()
  .then(receivedBookings => dispatch(receiveAllBookings(receivedBookings)),
  errors => dispatch(receiveBookingErrors(errors.responseJSON)));
};

// export const fetchSingleBooking = id => dispatch => {
//   dispatch(startLoadingSingleBooking());
//   return BookingApiUtil.getBooking(id)
//   .then(receivedBooking => dispatch(receiveSingleBooking(receivedBooking)),
//   errors => dispatch(receiveBookingErrors(errors.responseJSON)));
// };

export const makeBooking = booking => dispatch => {
  return BookingApiUtil.postBooking(booking)
  .then(createdBooking => dispatch(receiveSingleBooking(createdBooking)),
  errors => dispatch(receiveBookingErrors(errors.responseJSON)));
};

export const destroyBooking = id => dispatch => {
  return BookingApiUtil.deleteBooking(id)
  .then(destroyedBooking => dispatch(deleteBooking(destroyedBooking)),
  errors => dispatch(receiveBookingErrors(errors.responseJSON)));
};
