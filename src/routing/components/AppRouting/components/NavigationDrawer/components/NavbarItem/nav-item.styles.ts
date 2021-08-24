import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const navItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {},

    active: {
      color: theme.palette.primary.main,

      '& $icon': {
        color: theme.palette.primary.main,
      },
    },
  })
);
