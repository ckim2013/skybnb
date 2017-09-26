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

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchLodgings = fetchLodgings;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
