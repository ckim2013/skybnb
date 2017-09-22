import React from 'react';
import NavBar from './navbar/navbar';
import { Route } from 'react-router-dom';
import LodgingIndexContainer from './lodging/lodging_index_container';
import LodgingShowContainer from './lodging/lodging_show_container';

const App = () => (
  <div>
    <NavBar />
    <Route exact path='/' component={LodgingIndexContainer} />
    <Route exact path='/lodgings/:lodgingId' component={LodgingShowContainer} />
  </div>
);

export default App;
