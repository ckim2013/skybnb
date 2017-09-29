import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const deleteReview = review => ({
  type: DELETE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const createReview = (review, lodgingId) => dispatch => {
  return ReviewApiUtil.postReview(review)
  .then(createdReview => dispatch(receiveReview(createdReview)),
  errors => dispatch(receiveReviewErrors(errors.responseJSON)));
};

export const destroyReview = id => dispatch => {
  return ReviewApiUtil.deleteReview(id)
  .then(destroyedReview => dispatch(deleteReview(destroyedReview)),
  errors => dispatch(receiveReviewErrors(errors.responseJSON)));
};
