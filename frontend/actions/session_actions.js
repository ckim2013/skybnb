import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => (
  SessionApiUtil.postSession(user)
    .then(receivedUser => dispatch(receiveCurrentUser(receivedUser)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.deleteSession()
    .then(() => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
  SessionApiUtil.postUser(user)
    .then(createdUser => dispatch(receiveCurrentUser(createdUser)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
