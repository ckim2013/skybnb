export const getLodgings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/lodgings'
  })
);

export const getLodging = id => (
  $.ajax({
    method: 'GET',
    url: `api/lodgings/${id}`
  })
);

export const postLodging = lodging => (
  $.ajax({
    method: 'POST',
    url: 'api/lodgings'
  })
);

export const patchLodging = lodging => (
  $.ajax({
    method: 'PATCH',
    url: `api/lodgings/${lodging.id}`,
    data: { lodging }
  })
);

export const deleteLodging = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/lodgings/${id}`
  })
);
