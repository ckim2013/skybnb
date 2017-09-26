import { getLodgingsSearch } from '../util/lodging_search_api_util';

export const lodgingsearch = query => dispatch => (
  getLodgingsSearch(query).then((resp) => console.log(resp))
);
