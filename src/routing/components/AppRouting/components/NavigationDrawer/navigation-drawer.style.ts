import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NAVIGATION_DRAWER_STYLES } from 'utils/style.constants';

export const sidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: NAVIGATION_DRAWER_STYLES.sidebarDrawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: NAVIGATION_DRAWER_STYLES.sidebarDrawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
