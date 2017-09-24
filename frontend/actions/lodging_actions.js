import * as LodgingApiUtil from '../util/lodging_api_util';

export const RECEIVE_LODGINGS = 'RECEIVE_LODGINGS';
export const RECEIVE_LODGING = 'RECEIVE_LODGING';
export const DELETE_LODGING = 'DELETE_LODGING';
export const RECEIVE_LODGING_ERRORS = 'RECEIVE_LODGING_ERRORS';
export const START_LOADING_ALL_LODGINGS = 'START_LOADING_ALL_LODGINGS';
export const START_LOADING_SINGLE_LODGING = 'START_LOADING_SINGLE_LODGING';

export const receiveLodgings = lodgings => ({
  type: RECEIVE_LODGINGS,
  lodgings
});

// export const receiveLodging = lodging => ({
//   type: RECEIVE_LODGING,
//   lodging
// });
export const receiveLodging = lodging => {
  console.log('inside receiveLodging action', lodging);
  return ({
    type: RECEIVE_LODGING,
    lodging
  });
};

export const deleteLodging = lodging => ({
  type: DELETE_LODGING,
  lodging
});

export const receiveLodgingErrors = errors => ({
  type: RECEIVE_LODGING_ERRORS,
  errors
});

export const startLoadingAllLodgings = () => ({
  type: START_LOADING_ALL_LODGINGS
});

export const startLoadingSingleLodging = () => ({
  type: START_LOADING_SINGLE_LODGING
});

export const fetchLodgings = () => dispatch => {
  dispatch(startLoadingAllLodgings());
  return LodgingApiUtil.getLodgings()
  .then(receivedLodgings => dispatch(receiveLodgings(receivedLodgings)),
  errors => dispatch(receiveLodgingErrors(errors.responseJSON)));
};

export const fetchLodging = id => dispatch => {
  dispatch(startLoadingSingleLodging());
  return LodgingApiUtil.getLodging(id)
  .then(receivedLodging => dispatch(receiveLodging(receivedLodging)),
  errors => dispatch(receiveLodgingErrors(errors.responseJSON)));
};

export const makeLodging = lodging => dispatch => (
  LodgingApiUtil.postLodging(lodging)
  .then(createdLodging => dispatch(receiveLodging(createdLodging)),
  errors => dispatch(receiveLodgingErrors(errors.responseJSON)))
);

export const editLodging = lodging => dispatch => {
  console.log('inside editloging thunk', lodging);
  return(
    LodgingApiUtil.patchLodging(lodging)
    .then(editedLodging => dispatch(receiveLodging(editedLodging)),
    errors => dispatch(receiveLodgingErrors(errors.responseJSON)))
  );
};
// export const editLodging = lodging => dispatch => (
//   LodgingApiUtil.patchLodging(lodging)
//     .then(editedLodging => dispatch(receiveLodging(editedLodging)),
//     errors => dispatch(receiveLodgingErrors(errors.responseJSON)))
// );

export const destroyLodging = id => dispatch => (
  LodgingApiUtil.deleteLodging(id)
  .then(destroyedLodging => dispatch(deleteLodging(destroyedLodging)),
  errors => dispatch(receiveLodgingErrors(errors.responseJSON)))
);
