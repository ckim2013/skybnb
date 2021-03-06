import * as LodgingActions from '../actions/lodging_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const LodgingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case LodgingActions.RECEIVE_LODGINGS:
      return action.lodgings;
    case LodgingActions.RECEIVE_LODGING:
      const lodging_detail = action.lodging.lodging_detail;
      lodging_detail.review_ids = action.lodging.reviews
                                  .map(review => review.id);
      return Object.assign({}, state, { [lodging_detail.id]: lodging_detail } );
    case LodgingActions.DELETE_LODGING:
      delete newState[action.lodging.lodging_detail.id];
      return newState;
    default:
      return state;
  }
};

export default LodgingsReducer;
