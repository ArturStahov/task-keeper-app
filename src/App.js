import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewTableEvents from './view/viewTableEvents';
import ViewAutherization from './view/viewAutherization';
import ViewRegistration from './view/viewRegistration';

import AppBar from './components/AppBar';
import Footer from './components/Footer';

import PublicRoute from './components/Route/PublicRoute';
import PrivateRoute from './components/Route/PrivateRoute';

import Table from './components/Table';

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          <PublicRoute exact path="/" redirectTo="/table" restricted>
            <ViewAutherization />
            <Table />
          </PublicRoute>

          <PublicRoute exact path="/signup" restricted>
            <ViewRegistration />
          </PublicRoute>

          <PrivateRoute path="/table" redirectTo="/">
            {/* <ViewTableEvents /> */}
          </PrivateRoute>
          <Route>
            <h2>404</h2>
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}
