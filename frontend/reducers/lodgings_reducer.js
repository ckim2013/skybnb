import * as LodgingActions from '../actions/lodging_actions';
import merge from 'lodash/merge';

const LodgingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case LodgingActions.RECEIVE_LODGINGS:
    console.log('lodgingsss', action);
      return action.lodgings;
    case LodgingActions.RECEIVE_LODGING:
      console.log('inside lodgings reducer', action);
      const lodging_detail = action.lodging.lodging_detail
      // lodging.review_ids = lodging.reviews.map(review => review.id);
      return Object.assign({}, state, { [lodging_detail.id]: lodging_detail } );
    case LodgingActions.DELETE_LODGING:
      delete newState[action.lodging.id];
      return newState;
    default:
      return state;
  }
};

export default LodgingsReducer;
