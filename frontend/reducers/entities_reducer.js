import { combineReducers } from 'redux';
import LodgingsReducer from './lodgings_reducer';
import BookingsReducer from './bookings_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
  lodgings: LodgingsReducer,
  bookings: BookingsReducer,
  reviews: ReviewsReducer
});

export default EntitiesReducer;
