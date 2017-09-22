import { RECEIVE_LODGING } from '../actions/lodging_actions';

const LodgingDisplayReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LODGING:
      return action.lodging.id;
    default:
      return state;
  }
};

export default LodgingDisplayReducer;
