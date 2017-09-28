import { RECEIVE_LODGING, RECEIVE_LODGINGS } from '../actions/lodging_actions';

const LodgingDisplayReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LODGING:
      return action.lodging.lodging_detail.id;
    case RECEIVE_LODGINGS:
      return null;
    default:
      return state;
  }
};

export default LodgingDisplayReducer;
