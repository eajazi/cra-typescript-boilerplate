import { CustomerRepositoryImpl } from 'data/repositories/CustomerRepositoryImpl';
import { useCallback, useEffect, useState } from 'react';

/**
 * CustomersViewModel
 */
export const CustomersViewModel = () => {
  const customerRepositoryHook = CustomerRepositoryImpl();

  // viewModel constants
  const title = 'list of a shop customers';
  // repo variables
  const customers = customerRepositoryHook.getCustomers();

  useEffect(() => {
    // we imitate fetching customer over our API if we already didn't fetch items
    if (!customers.length) {
      const fetchedCustomers = customerRepositoryHook.fetchCustomers();
      // here we would handle response, f.e. errors or successfully fetch
      if (fetchedCustomers.length) {
        customerRepositoryHook.saveCustomers(fetchedCustomers);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // component state
  const [tempName, setTempName] = useState<string>('');
  const [tempLastname, setTempLastname] = useState<string>('');

  const handleOnTempNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  }, []);

  const handleOnTempLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTempLastname(e.target.value);
  }, []);

  const handleOnAddCustomerClick = () => {
    // addCustomer({ name: tempName, lastname: tempLastname });

    customerRepositoryHook.saveCustomer({ name: tempName, lastName: tempLastname });

    // reset fields
    setTempName('');
    setTempLastname('');
  };

  return {
    customers,
    tempName,
    tempLastname,
    title,
    handleOnAddCustomerClick,
    handleOnTempNameChange,
    handleOnTempLastNameChange,
    setTempName,
    setTempLastname,
  };
};
