import { makeAutoObservable } from 'mobx';
import RootStore from 'data/sources/local/store/rootStore';

export class NavigationDrawerModel {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  rootStore: RootStore;

  isSidebarOpened: boolean = false;

  toggleSidebar = () => {
    this.isSidebarOpened = !this.isSidebarOpened;
  };
}
