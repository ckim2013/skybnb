export const postReview = (review, lodgingId) => (
  $.ajax({
    method: 'POST',
    url: `api/lodgings/${lodgingId}/reviews`,
    data: { review }
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  })
);
