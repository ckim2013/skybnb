import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import LodgingErrorsReducer from './lodging_errors_reducer';
import BookingErrorsReducer from './booking_errors_reducer';
import ReviewErrorsReducer from './review_errors_reducer';

const ErrorsReducer = combineReducers({
  sessionErrors: SessionErrorsReducer,
  lodgingErrors: LodgingErrorsReducer,
  bookingErrors: BookingErrorsReducer,
  reviewErrors: ReviewErrorsReducer
});

export default ErrorsReducer;
