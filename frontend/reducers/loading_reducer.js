import { START_LOADING_ALL_LODGINGS,
         RECEIVE_LODGINGS, START_LOADING_SINGLE_LODGING,
         RECEIVE_LODGING } from '../actions/lodging_actions';

const initialState = {
  indexLoading: false,
  showLoading: false
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_ALL_LODGINGS:
      return Object.assign({}, state, { indexLoading: true });
    case RECEIVE_LODGINGS:
      return Object.assign({}, state, { indexLoading: false });
    case START_LOADING_SINGLE_LODGING:
      return Object.assign({}, state, { showLoading: true });
    case RECEIVE_LODGING:
      return Object.assign({}, state, { showLoading: false });
    default:
      return state;
  }
};

export default LoadingReducer;
