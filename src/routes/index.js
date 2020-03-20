import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

const Home = lazy(() => import('~/pages/Dashboard'));
const Profile = lazy(() => import('~/pages/Profile'));

const SignIn = lazy(() => import('~/pages/SignIn'));
const SignUp = lazy(() => import('~/pages/SignUp'));

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/register">
        <SignUp />
      </Route>

      <Route path="/dashboard" isPrivate>
        <Home />
      </Route>

      <Route path="/profile" isPrivate>
        <Profile />
      </Route>

      <Route path="**">
        <h1>404</h1>
      </Route>
    </Switch>
  );
}
