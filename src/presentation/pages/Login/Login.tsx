import React from 'react';

// ui
import { Button, Grid, Typography } from '@material-ui/core';

// view model
import { LoginViewModel } from './LoginViewModel';

/**
 * Login page
 */
const Login = (): JSX.Element => {
  const vm = LoginViewModel();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      spacing={8}
      style={{ height: '100vh', backgroundColor: 'aliceblue' }}
    >
      <Grid item>
        <Typography variant="h4">Login</Typography>
        <Typography variant="body1">To login please click button</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={vm.handleOnLoginClick}>
          Log in
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
