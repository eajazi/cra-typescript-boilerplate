import { useCallback, useState } from 'react';
import { useStores } from 'store/helpers/useStores';

/**
 * CustomersViewModel
 */
export const CustomersViewModel = () => {
  // store
  const {
    dataStore: { customersModel },
  } = useStores();

  const { addCustomer, customers } = customersModel;

  // viewModel constants
  const title = 'list of a shop customers';

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
    addCustomer({ name: tempName, lastname: tempLastname });

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
