import React from 'react';

// ui
import { Button, Grid, List, ListItem, ListItemText, TextField } from '@material-ui/core';

// libs
import { observer } from 'mobx-react-lite';

import { CustomersViewModel } from './Customers.ViewModel';

// components
import CustomersSpecificTitle from './components/Title';

/**
 * Customers page
 */
const Customers = observer((): JSX.Element => {
  const vm = CustomersViewModel();

  return (
    <Grid container direction="column" spacing={4}>
      <CustomersSpecificTitle title={vm.title} />

      <Grid item>
        <TextField id="standard-name" fullWidth label="Name" value={vm.tempName} onChange={vm.handleOnTempNameChange} />
      </Grid>

      <Grid item>
        <TextField
          id="standard-lastname"
          fullWidth
          label="Last name"
          value={vm.tempLastname}
          onChange={vm.handleOnTempLastNameChange}
        />
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" size="medium" onClick={vm.handleOnAddCustomerClick}>
          add customer
        </Button>
      </Grid>

      <List>
        {vm.customers.map((customer) => (
          <ListItem key={customer.id}>
            <ListItemText>{`${customer.name}  ${customer.lastname}`}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
});

export default Customers;
