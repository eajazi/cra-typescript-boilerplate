import { useStores } from 'data/sources/local/store/helpers/useStores';

/**
 * NavigationDrawerViewModel
 */
export const NavigationDrawerViewModel = () => {
  // store
  const {
    uiStore: { navigationDrawerModel },
  } = useStores();

  const { isSidebarOpened, toggleSidebar } = navigationDrawerModel;

  return { isSidebarOpened, toggleSidebar };
};
