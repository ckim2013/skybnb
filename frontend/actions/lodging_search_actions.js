import { getLodgingsSearch } from '../util/lodging_search_api_util';

export const lodgingssearch = query => dispatch => (
  getLodgingsSearch(query).then((resp) => console.log(resp))
);
