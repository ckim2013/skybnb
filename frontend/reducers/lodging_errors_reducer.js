import * as LodgingActions from '../actions/lodging_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const LodgingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case LodgingActions.RECEIVE_LODGINGS:
      return [];
    case LodgingActions.RECEIVE_LODGING:
      return [];
    case LodgingActions.RECEIVE_LODGING_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default LodgingErrorsReducer;
