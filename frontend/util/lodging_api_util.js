export const getLodgings = () => {
  console.log('inside ajax get all');
  return $.ajax({
    method: 'GET',
    url: 'api/lodgings'
  });
};
// export const getLodgings = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/lodgings'
//   })
// );

export const getLodging = id => {
  console.log('inside ajax get single');
  return $.ajax({
    method: 'GET',
    url: `api/lodgings/${id}`
  });
};
// export const getLodging = id => (
//   $.ajax({
//     method: 'GET',
//     url: `api/lodgings/${id}`
//   })
// );

export const postLodging = lodging => {
  console.log('inside post', lodging);
  return $.ajax({
    method: 'POST',
    url: 'api/lodgings',
    data: { lodging }
  });
};

// export const postLodging = lodging => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/lodgings',
//     data: { lodging }
//   })
// );

export const patchLodging = lodging => {
  console.log(lodging);
  return $.ajax({
    method: 'PATCH',
    url: `api/lodgings/${lodging.id}`,
    data: { lodging }
  });
};

// export const patchLodging = lodging => (
//   $.ajax({
//     method: 'PATCH',
//     url: `api/lodgings/${lodging.id}`,
//     data: { lodging }
//   })
// );

export const deleteLodging = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/lodgings/${id}`
  })
);
