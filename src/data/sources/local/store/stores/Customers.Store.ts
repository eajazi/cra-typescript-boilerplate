import { makeAutoObservable } from 'mobx';
import RootStore from 'data/sources/local/store/rootStore';
import { v4 as uuid_v4 } from 'uuid';
import { CustomerType } from 'domain/entities/Customer';

/**
 * Customers store
 */
export class CustomersStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  rootStore: RootStore;

  customers: CustomerType[] = [];

  // actions
  addCustomer = (customer: CustomerType) => {
    this.customers.push({
      ...customer,
      id: uuid_v4(),
    });
  };

  addCustomers = (customers: CustomerType[]) => {
    this.customers = this.customers.concat(customers);
  };

  updateCustomer = (customer: CustomerType) => {
    const indexOfPerson = this.customers.findIndex((_customer) => _customer.id === customer.id);

    this.customers[indexOfPerson] = customer;
  };
}
