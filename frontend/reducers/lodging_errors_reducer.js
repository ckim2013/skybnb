import * as LodgingActions from '../actions/lodging_actions';

const LodgingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case LodgingActions.RECEIVE_LODGINGS:
      return [];
    case LodgingActions.RECEIVE_LODGING:
      return [];
    case LodgingActions.RECEIVE_LODGING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default LodgingErrorsReducer;
