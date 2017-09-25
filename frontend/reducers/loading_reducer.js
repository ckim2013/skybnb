import * as LodgingActions from '../actions/lodging_actions';
import { START_LOADING_ALL_BOOKINGS,
         RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions';

const initialState = {
  indexLoading: false,
  showLoading: false
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LodgingActions.START_LOADING_ALL_LODGINGS:
      return Object.assign({}, state, { indexLoading: true });
    case LodgingActions.RECEIVE_LODGINGS:
      return Object.assign({}, state, { indexLoading: false });
    case LodgingActions.START_LOADING_SINGLE_LODGING:
      return Object.assign({}, state, { showLoading: true });
    case LodgingActions.RECEIVE_LODGING:
      return Object.assign({}, state, { showLoading: false });
    case START_LOADING_ALL_BOOKINGS:
      return Object.assign({}, state, { indexLoading: true });
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign({}, state, { indexLoading: true });
    default:
      return state;
  }
};

export default LoadingReducer;
