import React, { useCallback, useEffect } from 'react';
import { useStores } from 'data/sources/local/store/helpers/useStores';
import { LocalStore } from 'data/sources/local/localStorage/LocalStorage';
import { useHistory } from 'react-router';

/**
 * TopbarViewModel
 */
export const TopbarViewModel = () => {
  const history = useHistory();

  // store
  const {
    uiStore: { navigationDrawerModel, topbarModel },
  } = useStores();

  const { toggleSidebar } = navigationDrawerModel;
  const { setProfileMenuOpen } = topbarModel;

  const { isLoggedIn, setIsLoggedIn } = LocalStore();

  // TODO: needs to be updated in future, for now we're checking here in this viewModel if user has logged out
  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/');
    }
  }, [history, isLoggedIn]);

  // state
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOnLogoutClick = useCallback(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMoreAnchorEl(null);
  }, []);

  const handleMobileMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }, []);

  return {
    isMobileMenuOpen,
    mobileMoreAnchorEl,
    handleOnLogoutClick,
    handleMobileMenuClose,
    handleMobileMenuOpen,
    toggleSidebar,
    setProfileMenuOpen,
  };
};
