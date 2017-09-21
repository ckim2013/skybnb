import React from 'react';
import NavBar from './navbar/navbar';
import LodgingIndexContainer from './lodging/lodging_index_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavBar />
    <Route exact path='/' component={LodgingIndexContainer} />
  </div>
);

export default App;
