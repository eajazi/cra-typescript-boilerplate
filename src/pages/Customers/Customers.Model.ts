import { makeAutoObservable } from 'mobx';
import RootStore from 'store/rootStore';
import { uuid } from 'uuidv4';
import { Customer } from './interfaces/Customer';

/**
 * Customers model
 */
export class CustomersModel {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  rootStore: RootStore;

  customers: Customer[] = [];

  // actions
  addCustomer = (customer: Customer) => {
    this.customers.push({
      ...customer,
      id: uuid(),
    });
  };

  updateCustomer = (customer: Customer) => {
    const indexOfPerson = this.customers.findIndex((_customer) => _customer.id === customer.id);

    this.customers[indexOfPerson] = customer;
  };
}
