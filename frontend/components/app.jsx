import React from 'react';
import NavBar from './navbar/navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import LodgingIndexContainer from './lodging/lodging_index_container';
import LodgingShowContainer from './lodging/lodging_show_container';
import LodgingFormContainer from './lodging/lodging_form_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path='/lodgings/:lodgingId' component={ LodgingShowContainer } />
      <ProtectedRoute component={ LodgingFormContainer } path='/lodgings/:lodgingId/edit' />
      <ProtectedRoute component={ LodgingFormContainer } path='/lodgings/' />
      <Route component={ LodgingIndexContainer } />
    </Switch>
  </div>
);

export default App;
