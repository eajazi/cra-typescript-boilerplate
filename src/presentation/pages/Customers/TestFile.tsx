import React, { useCallback, useState } from 'react';

// ui

import { Button, Grid, List, ListItem, ListItemText, TextField } from '@material-ui/core';

// libs
import { observer } from 'mobx-react-lite';

// helpers
import { useStores } from 'data/sources/local/store/helpers/useStores';

/** 

 * Customers page 

 */

const Customers = observer((): JSX.Element => {
  // store

  const {
    dataStore: { customersStore },
  } = useStores();

  const { addCustomer, customers } = customersStore;

  // component state

  const [tempName, setTempName] = useState<string>('');

  const [tempLastname, setTempLastname] = useState<string>('');

  // component interaction events

  const handleOnTempNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  }, []);

  const handleOnTempLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTempLastname(e.target.value);
  }, []);

  const handleOnAddCustomerClick = useCallback(() => {
    addCustomer({ name: tempName, lastName: tempLastname });

    // reset fields

    setTempName('');

    setTempLastname('');
  }, [addCustomer, tempLastname, tempName]);

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <TextField id="standard-name" fullWidth label="Name" value={tempName} onChange={handleOnTempNameChange} />
      </Grid>

      <Grid item>
        <TextField
          id="standard-lastname"
          fullWidth
          label="Last name"
          value={tempLastname}
          onChange={handleOnTempLastNameChange}
        />
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" size="medium" onClick={handleOnAddCustomerClick}>
          add customer
        </Button>
      </Grid>

      <List>
        {customers.map((customer) => (
          <ListItem key={customer.id}>
            <ListItemText>{`${customer.name}  ${customer.lastName}`}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
});

export default Customers;
