import { makeStyles } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
    justifyContent: 'space-between'
  },
  nav: {
    marginBottom: theme.spacing(2),
    '& > li': { marginBottom: theme.spacing(2) }
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color:
      theme.palette.type === 'light'
        ? theme.palette.common.black
        : theme.palette.common.white,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightBold
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}))
