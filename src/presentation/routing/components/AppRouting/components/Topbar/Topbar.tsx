import React from 'react';

// store
import { observer } from 'mobx-react-lite';

// ui
import { AppBar, Hidden, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';

// view model
import { TopbarViewModel } from './Topbar.ViewModel';

// styles
import { topbarStyles } from './topbar.styles';

/**
 * Topbar view
 */
const Topbar = observer((): JSX.Element => {
  // viewmodel
  const vm = TopbarViewModel();

  const classes = topbarStyles();

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={vm.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={vm.isMobileMenuOpen}
      onClose={vm.handleMobileMenuClose}
    >
      <MenuItem onClick={vm.handleOnLogoutClick}>
        <IconButton
          aria-label="logout"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  // return root
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              onClick={vm.toggleSidebar}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography className={classes.title} variant="h6" noWrap>
            Title of your app
          </Typography>

          <div className={classes.root} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="logout"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={vm.handleOnLogoutClick}
              color="inherit"
            >
              <Tooltip title="Logout">
                <LogoutIcon />
              </Tooltip>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={vm.handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
});

export default Topbar;
