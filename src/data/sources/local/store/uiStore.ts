import { NavigationDrawerModel } from 'presentation/routing/components/AppRouting/components/NavigationDrawer/NavigationDrawer.Model';
import { TopbarModel } from 'presentation/routing/components/AppRouting/components/Topbar/Topbar.Model';
import RootStore from './rootStore';

export default class UiStore {
  navigationDrawerModel: NavigationDrawerModel;

  topbarModel: TopbarModel;

  constructor(rootStore: RootStore) {
    this.navigationDrawerModel = new NavigationDrawerModel(rootStore);
    this.topbarModel = new TopbarModel(rootStore);
  }
}
