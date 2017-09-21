import * as LodgingActions from '../actions/lodging_actions';
import merge from 'lodash/merge';

const LodgingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case LodgingActions.RECEIVE_LODGINGS:
      return merge({}, state, action.lodgings);
    case LodgingActions.RECEIVE_LODGING:
      return merge({}, state, {[action.lodging.id]: action.lodging});
    case LodgingActions.DELETE_LODGING:
      delete newState[action.lodging.id];
      return newState;
    default:
      return state;
  }
};

export default LodgingsReducer;
