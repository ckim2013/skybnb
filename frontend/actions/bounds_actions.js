import { fetchLodgings, startLoadingAllLodgings } from './lodging_actions';

export const updateBounds = bounds => dispatch => {
  console.log('inside updatebounds', bounds);
  dispatch(fetchLodgings(bounds));
};
