import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useAppRoutingStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: grey[100],
      height: '100%',
      overflow: 'hidden',
      width: '100%',
    },
    wrapper: {
      height: '100%',
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 256,
      },
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    content: {
      padding: 40,
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
    },
  })
);
