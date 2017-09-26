import * as BookingActions from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case BookingActions.RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case BookingActions.RECEIVE_SINGLE_BOOKING:
      return Object.assign({}, state, {[action.booking.id]: action.booking});
    case BookingActions.DELETE_BOOKING:
      delete newState[action.booking.id];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;
