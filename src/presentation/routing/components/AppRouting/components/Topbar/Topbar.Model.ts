import { makeAutoObservable } from 'mobx';
import RootStore from 'data/sources/local/store/rootStore';

export class TopbarModel {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  rootStore: RootStore;

  // Observables
  isProfileMenuOpen: boolean = false;

  anchorEl: null | HTMLElement = null;

  setProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.isProfileMenuOpen = true;
    this.anchorEl = event.currentTarget;
  };

  setProfileMenuClose = () => {
    this.isProfileMenuOpen = false;
    this.anchorEl = null;
  };
}
