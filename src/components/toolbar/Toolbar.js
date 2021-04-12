import { withStyles } from '@material-ui/core/styles'
import MuiToolbar from '@material-ui/core/Toolbar'
import React from 'react'

const StyledToolbar = withStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: { padding: theme.spacing(0, 5) }
  }
}))(MuiToolbar)

export default function Toolbar(props) {
  return <StyledToolbar {...props} />
}
