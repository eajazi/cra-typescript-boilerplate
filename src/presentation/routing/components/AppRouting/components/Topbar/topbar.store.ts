import { makeAutoObservable } from 'mobx';

export class TopBarStore {
  constructor() {
    makeAutoObservable(this);
  }

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
