import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LodgingIndexContainer from './lodging/lodging_index_container';
import LodgingShowContainer from './lodging/lodging_show_container';
import LodgingFormContainer from './lodging/lodging_form_container';
import BookingIndexContainer from './booking/booking_index_container';
import { ProtectedRoute } from '../util/route_util';

import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path='/lodgings/:lodgingId' component={ LodgingShowContainer } />
      <ProtectedRoute component={ LodgingFormContainer } path='/lodgings/:lodgingId/edit' />
      <ProtectedRoute component={ LodgingFormContainer } path='/lodgings/' />
      <ProtectedRoute component={ BookingIndexContainer } path='/bookings/' />
      <Route exact path='/' component={ SearchContainer } />
    </Switch>
  </div>
);

export default App;
