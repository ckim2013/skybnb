import { getLodgingsSearch } from '../util/lodging_search_api_util';
import { receiveLodgings, startLoadingAllLodgings } from './lodging_actions';

export const lodgingssearch = query => dispatch => {
  dispatch(startLoadingAllLodgings());
  return getLodgingsSearch(query)
  .then(filteredLodgings => dispatch(receiveLodgings(filteredLodgings)));
};
