import { combineReducers } from 'redux';
// import EntitiesReducer from '/entities_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
  ui: UIReducer
});

export default RootReducer;
