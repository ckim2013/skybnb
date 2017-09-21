import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, logout} from './actions/session_actions';

import {getLodgings, getLodging} from './util/lodging_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { ui: {session:
      { currentUser: window.currentUser }
    }
  };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);

  // NB: Window testing
  window.getLodgings = getLodgings;
  window.getLodging = getLodging;
});
