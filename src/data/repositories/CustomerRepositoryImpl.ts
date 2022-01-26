import { CustomerType } from 'domain/entities/Customer';
import { useStores } from 'data/sources/local/store/helpers/useStores';

// mock
import mockResponseCustomers from 'mock/data.json';

// domain
import CustomerUseCase from 'domain/useCases/CustomerUseCase';

/**
 * custom repository implementation
 */
export const CustomerRepositoryImpl = (): CustomerUseCase => {
  const {
    dataStore: { customersStore },
  } = useStores();

  const { addCustomer, addCustomers, customers } = customersStore;

  const fetchCustomers = (): CustomerType[] => {
    const customersFetched: CustomerType[] = mockResponseCustomers as unknown as CustomerType[];

    return customersFetched;
  };

  const saveCustomer = (customer: CustomerType) => {
    addCustomer(customer);
  };

  const saveCustomers = (customer: CustomerType[]) => {
    addCustomers(customer);
  };

  const getCustomers = (): CustomerType[] => {
    return customers;
  };

  return {
    fetchCustomers,
    saveCustomer,
    saveCustomers,
    getCustomers,
  };
};
