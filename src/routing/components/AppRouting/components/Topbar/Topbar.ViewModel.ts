import React, { useCallback } from 'react';
import { useStores } from 'store/helpers/useStores';

/**
 * TopbarViewModel
 */
export const TopbarViewModel = () => {
  // store
  const {
    uiStore: { navigationDrawerModel, topbarModel },
  } = useStores();

  const { toggleSidebar } = navigationDrawerModel;
  const { setProfileMenuOpen } = topbarModel;

  // state
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setProfileMenuOpen(event);
    },
    [setProfileMenuOpen]
  );

  const handleMobileMenuClose = useCallback(() => {
    setMobileMoreAnchorEl(null);
  }, []);

  const handleMobileMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }, []);

  return {
    isMobileMenuOpen,
    mobileMoreAnchorEl,
    handleProfileMenuOpen,
    handleMobileMenuClose,
    handleMobileMenuOpen,
    toggleSidebar,
    setProfileMenuOpen,
  };
};
