// stores

import { CustomersStore } from 'data/sources/local/store/stores/Customers.Store';
import RootStore from './rootStore';

/**
 * data store
 */
export default class DataStore {
  // stores
  customersStore: CustomersStore;

  constructor(rootStore: RootStore) {
    this.customersStore = new CustomersStore(rootStore);
  }
}
