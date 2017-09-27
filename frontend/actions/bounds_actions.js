import { fetchLodgings, startLoadingAllLodgings } from './lodging_actions';

export const updateBounds = bounds => dispatch => {
  dispatch(fetchLodgings(bounds));
};
