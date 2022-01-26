import React, { useEffect } from 'react';

// libs
import { useLocation } from 'react-router-dom';

// store
import { observer } from 'mobx-react-lite';

// ui
import { Drawer, Hidden, Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

// components
import { NavbarItem } from './components/NavbarItem/NavbarItem';

// styles
import { sidebarStyles } from './navigation-drawer.style';

// constants
import { navigationDrawerItems } from './navigation-drawer-items';
import { NavigationDrawerViewModel } from './NavigationDrawer.ViewModel';

/**
 * NavigationDrawer view
 */
const NavigationDrawer = observer((): JSX.Element => {
  // viewModel
  const vm = NavigationDrawerViewModel();

  // style
  const classes = sidebarStyles();
  const location = useLocation();

  useEffect(() => {
    if (vm.isSidebarOpened) {
      vm.toggleSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // drawer content
  const content = (
    <div>
      {navigationDrawerItems.map((navItem) => (
        <NavbarItem key={navItem.path} name={navItem.linkName} icon={navItem.icon} path={navItem.path} />
      ))}
    </div>
  );

  return (
    <div className={classes.root}>
      <Hidden lgUp>
        <Drawer
          open={vm.isSidebarOpened}
          onClose={vm.toggleSidebar}
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>{content}</div>
        </Drawer>
      </Hidden>

      <Hidden mdDown>
        <CssBaseline />
        <Drawer anchor="left" classes={{ paper: classes.drawerPaper }} open variant="persistent">
          <Toolbar />
          {content}
        </Drawer>
      </Hidden>
    </div>
  );
});

export default NavigationDrawer;
