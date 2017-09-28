// export const selectLodgingReviews = (state, lodging) => {
//   console.log('reviews inside selector', state.entities.reviews);
//   console.log('review_ids inside selector', lodging.review_ids);
//   return lodging ? lodging.review_ids.map(reviewId =>
//     state.entities.reviews[reviewId]) : [];
// };
export const selectLodgingReviews = (state, lodging) => {
  if (lodging) {
    console.log('reviews inside selector', state.entities.reviews);
    console.log('review_ids inside selector', lodging.review_ids);
    return lodging.review_ids.map(reviewId => state.entities.reviews[reviewId])
  } else {
    return [];
  }
};
