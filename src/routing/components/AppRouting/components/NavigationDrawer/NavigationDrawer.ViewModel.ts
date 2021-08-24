import { useStores } from 'store/helpers/useStores';

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
