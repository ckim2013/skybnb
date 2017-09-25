import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import LodgingErrorsReducer from './lodging_errors_reducer';
import BookingErrorsReducer from './bookings_errors_reducer';

const ErrorsReducer = combineReducers({
  sessionErrors: SessionErrorsReducer,
  lodgingErrors: LodgingErrorsReducer,
  bookingErrors: BookingErrorsReducer
});

export default ErrorsReducer;
