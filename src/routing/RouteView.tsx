/* eslint-disable react/jsx-no-bind */

import NotFound from 'pages/NotFound';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Login from 'pages/Login';

// components
import AppRouting from './components/AppRouting';
import NonAuthRouting from './components/NonAuthRouting';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const RouteView = (): JSX.Element => {
  // redirects from "/" to "/app"
  const renderRootRedirect = () => <Redirect to="/app" />;

  return (
    <>
      <Switch>
        <Route exact path="/" render={renderRootRedirect} />
        <PrivateRoute path="/app" component={AppRouting} />
        <Route path="/non-auth" component={NonAuthRouting} />
        <Route exact path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
};

export default RouteView;
