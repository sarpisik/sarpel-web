import { Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

const StyledAvatar = withStyles(theme => ({
  root: { height: 'auto', padding: theme.spacing(0.5) },
  img: { marginBottom: 0 }
}))(Avatar)

export function LogoAvatar(props) {
  return <StyledAvatar {...props} variant="square" />
}
