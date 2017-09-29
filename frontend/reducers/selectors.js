export const selectLodgingReviews = (state, lodging) => {
  if (lodging) {
    return lodging.review_ids.map(reviewId => state.entities.reviews[reviewId]);
  } else {
    return [];
  }
};
