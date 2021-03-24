import { withStyles } from '@material-ui/core/styles'
import MuiToolbar from '@material-ui/core/Toolbar'
import React from 'react'

const StyledToolbar = withStyles({
  root: { justifyContent: 'space-between' }
})(MuiToolbar)

export default function Toolbar(props) {
  return <StyledToolbar {...props} />
}
