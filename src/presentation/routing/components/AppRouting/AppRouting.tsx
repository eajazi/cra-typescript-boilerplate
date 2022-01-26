/* eslint-disable react/jsx-no-bind */
import React from 'react';

// libs
import { Redirect, Route, Switch } from 'react-router';

// components
import FirstAppPage from 'presentation/pages/FirstAppPage';
import About from 'presentation/pages/Customers';
import NavigationDrawer from './components/NavigationDrawer';
import Topbar from './components/Topbar';

// styles
import { useAppRoutingStyles } from './app_routing.styles';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

/**
 * App routing
 */
const AppRouting = (): JSX.Element => {
  // styles
  const classes = useAppRoutingStyles();

  // redirects from "/app" to "/app/firstpage"
  const renderRootRedirect = () => <Redirect to="/app/first-app-page" />;

  // return root view
  return (
    <div className={classes.root}>
      <Topbar />
      <NavigationDrawer />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Switch>
              <Route exact path="/app" render={renderRootRedirect} />

              <PrivateRoute path="/app/first-app-page" component={FirstAppPage} />
              <Route path="/app/customers" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRouting;
