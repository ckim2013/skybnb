import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';

// import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { ui: {session: { currentUser: window.currentUser } } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // NB: Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to SKYbnb</h1>, root);
});

// NB: Testing
// window.postUser = SessionApiUtil.postUser;
// window.postSession = SessionApiUtil.postSession;
// window.deleteSession = SessionApiUtil.deleteSession;

window.signup = signup;
window.login = login;
window.logout = logout;
