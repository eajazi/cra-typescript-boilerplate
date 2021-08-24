import React from 'react';

// libs
import { NavLink as RouterLink, useLocation } from 'react-router-dom';

// ui
import { Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

// types
import { NavListItemProps } from './nav-item.types';

// styles
import { navItemStyles } from './nav-item.styles';

/**
 * NavbarItem view
 */
export const NavbarItem = ({ name, icon, path }: NavListItemProps): JSX.Element => {
  // path location
  const location = useLocation();

  // styles
  const classes = navItemStyles();

  return (
    <Link component={RouterLink} to={path} color="inherit" underline="none">
      <ListItem selected={location.pathname.startsWith(path)} classes={{ selected: classes.active }} button>
        {icon && (
          <ListItemIcon>
            <Icon className={classes.icon}>{icon}</Icon>
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  );
};
