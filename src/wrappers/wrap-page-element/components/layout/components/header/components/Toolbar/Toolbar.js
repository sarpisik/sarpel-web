import React from 'react'
import MuiToolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

const StyledToolbar = withStyles({
  root: { justifyContent: 'flex-end' }
})(MuiToolbar)

export default function Toolbar(props) {
  return <StyledToolbar {...props} />
}
