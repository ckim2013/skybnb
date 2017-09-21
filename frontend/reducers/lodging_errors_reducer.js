import { RECEIVE_LODGINGS, RECEIVE_LODGING, RECEIVE_LODGING_ERRORS } from '../actions/lodging_actions';

const LodgingErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_LODGINGS:
      return [];
    case RECEIVE_LODGING:
      return [];
    case RECEIVE_LODGING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default LodgingErrorsReducer;
