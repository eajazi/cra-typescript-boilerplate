import React from 'react';

// ui
import { Grid, Icon, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

// styles
import { useNotFoundStyles } from './not_found.styles';

/**
 * Not found page
 */
const NotFound = (): JSX.Element => {
  const classes = useNotFoundStyles();

  return (
    <Grid className={classes.root} container direction="column" alignItems="center" justify="center" spacing={4}>
      <Grid item direction="column">
        <Icon color="primary" fontSize="large">
          <ErrorIcon />
        </Icon>
      </Grid>
      <Grid item>
        <Typography variant="h5">Not found, 404</Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
