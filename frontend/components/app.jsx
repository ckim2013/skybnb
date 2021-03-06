import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LodgingIndexContainer from './lodging/lodging_index_container';
import LodgingShowContainer from './lodging/lodging_show_container';
import LodgingFormContainer from './lodging/lodging_form_container';
import BookingIndexContainer from './booking/booking_index_container';
import BrokenLink from './broken_link/broken_link';
import Splash from './splash/splash';
import { ProtectedRoute } from '../util/route_util';

import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path='/lodgings/:lodgingId' component={ LodgingShowContainer } />
        <ProtectedRoute component={ LodgingFormContainer } path='/lodgings/:lodgingId/edit' />
        <ProtectedRoute component={ LodgingFormContainer } exact path='/lodgings/' />
        <ProtectedRoute component={ BookingIndexContainer } path='/bookings/' />
        <Route exact path='/explore' component={ SearchContainer } />
        <Route exact path='/' component={ Splash } />
        <Route path = '/' component={ BrokenLink } />
      </Switch>
    </main>
  </div>
);

export default App;
