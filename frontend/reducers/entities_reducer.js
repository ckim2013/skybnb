import { combineReducers } from 'redux';
import LodgingsReducer from './lodgings_reducer';

const EntitiesReducer = combineReducers({
  lodgings: LodgingsReducer
});

export default EntitiesReducer;
