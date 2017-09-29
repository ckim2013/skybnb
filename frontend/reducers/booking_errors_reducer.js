import * as BookingActions from '../actions/booking_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const BookingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case BookingActions.RECEIVE_ALL_BOOKINGS:
      return [];
    case BookingActions.RECEIVE_SINGLE_BOOKING:
      return [];
    case BookingActions.RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default BookingErrorsReducer;
