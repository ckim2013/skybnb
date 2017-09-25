import * as LodgingActions from '../actions/lodging_actions';

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
    default:
      return state;
  }
};

export default LoadingReducer;
