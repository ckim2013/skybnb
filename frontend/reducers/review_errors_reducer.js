import * as ReviewActions from '../actions/review_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const ReviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ReviewActions.RECEIVE_REVIEW:
      return [];
    case ReviewActions.RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ReviewErrorsReducer;
