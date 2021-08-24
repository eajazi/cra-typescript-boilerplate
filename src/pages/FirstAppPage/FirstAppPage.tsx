import React from 'react';

// libs
import { observer } from 'mobx-react-lite';

// ui
import { Button, Grid, Typography } from '@material-ui/core';

// view model
import { FirstAppPageViewModel } from './FirstAppPage.ViewModel';

/**
 * FirstAppPage page
 */
const FirstAppPage = observer((): JSX.Element => {
  const vm = FirstAppPageViewModel();

  return (
    <Grid container justify="center" alignItems="center" direction="column" spacing={8} style={{ minHeight: '100%' }}>
      <Grid item>
        <Typography variant="h4">{vm.title}</Typography>
        <Typography variant="body1">{vm.description}</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={vm.handleOnLogoutClick}>
          Log out
        </Button>
      </Grid>
    </Grid>
  );
});

export default FirstAppPage;
