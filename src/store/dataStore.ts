// stores

import { CustomersModel } from 'pages/Customers/Customers.Model';
import RootStore from './rootStore';

/**
 * data store
 */
export default class DataStore {
  // stores
  customersModel: CustomersModel;

  constructor(rootStore: RootStore) {
    this.customersModel = new CustomersModel(rootStore);
  }
}
