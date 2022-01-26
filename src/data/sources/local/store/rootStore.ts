import DataStore from './dataStore';
import UiStore from './uiStore';

/**
 * entry point for our mobx store
 */
export default class RootStore {
  dataStore: DataStore;

  uiStore: UiStore;

  constructor() {
    this.dataStore = new DataStore(this);
    this.uiStore = new UiStore(this);
  }
}
