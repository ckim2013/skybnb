import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { destroyLodging, fetchLodgings, fetchLodging, editLodging } from './actions/lodging_actions';

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

  // NB: Window testing
  window.store = store;
  window.dispatch = store.dispatch;
  // window.fetchLodgings = fetchLodgings;
  // window.fetchLodging = fetchLodging;
  // window.editLodging = editLodging;
  // window.destroyLodging = destroyLodging;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
