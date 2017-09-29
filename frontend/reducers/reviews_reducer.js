import { RECEIVE_LODGING } from '../actions/lodging_actions';
import { RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LODGING:
      const reviews = action.lodging.reviews.reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
      }, {});
      return Object.assign({}, state, reviews);
     case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    default:
      return state;
  }
};

export default ReviewsReducer;
