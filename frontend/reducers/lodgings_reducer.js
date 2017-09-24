import * as LodgingActions from '../actions/lodging_actions';
import merge from 'lodash/merge';

const LodgingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case LodgingActions.RECEIVE_LODGINGS:
      console.log('inside lodgings reducer for many', action.lodgings);
      console.log('current state before merge', state);
      console.log('after assign', Object.assign({}, state, action.lodgings));
      return Object.assign({}, state, action.lodgings);
      // return merge({}, state, action.lodgings);
      // return action.lodgings;
    case LodgingActions.RECEIVE_LODGING:
      console.log('inside lodgings reducer for one', action.lodging);
      return Object.assign({}, state, {[action.lodging.id]: action.lodging});
    case LodgingActions.DELETE_LODGING:
      delete newState[action.lodging.id];
      return newState;
    default:
      return state;
  }
};

export default LodgingsReducer;
