/* eslint-disable react/jsx-no-bind */
import React from 'react';

// libs
import { Redirect, Route, useHistory } from 'react-router-dom';
import { LocalStore } from 'store/LocalStore';

// types
import { PrivateRouteProps } from './interfaces/PrivateRouteProps';

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps): JSX.Element => {
  const history = useHistory();
  const { isLoggedIn } = LocalStore();

  // You can check special cases you need from the token. And then act correspondingly
  // E.g. If user is admin and the "user" part of the app is prevented for admin.
  // Here the data should be read from your token/cookies.
  // Prior to this you should have code to check whether the token is valid or invalid.
  const decodedToken = {
    userData: {
      isAdmin: false,
    },
  };

  if (decodedToken.userData.isAdmin) {
    history.push('/admin-panel');
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        // logic for authenticated user to access /app part goes here.
        // e.g. check if user is logged-in logic.

        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
