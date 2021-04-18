import { withStyles } from '@material-ui/core/styles'

export function StyledDynamicColor(Component) {
  return withStyles(setDynamicColor)(Component)
}

function setDynamicColor(theme) {
  return {
    root: {
      color:
        theme.palette.type === 'light'
          ? theme.palette.common.black
          : theme.palette.common.white
    }
  }
}
