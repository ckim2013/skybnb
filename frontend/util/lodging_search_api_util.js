export const getLodgingsSearch = query => (
  $.ajax({
    method: 'GET',
    url: 'api/lodgingssearch',
    data: { query }
  })
);
