import { combineReducers } from 'redux';
import LodgingsReducer from './lodgings_reducer';
import BookingsReducer from './bookings_reducer';

const EntitiesReducer = combineReducers({
  lodgings: LodgingsReducer,
  bookings: BookingsReducer
});

export default EntitiesReducer;
