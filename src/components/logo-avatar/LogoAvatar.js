import Avatar from '@material-ui/core/Avatar/Avatar'
import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'

const StyledAvatar = withStyles(theme => ({
  root: { height: 'auto', padding: theme.spacing(0.5) },
  img: { marginBottom: 0 }
}))(Avatar)

export function LogoAvatar(props) {
  return <StyledAvatar {...props} variant="square" />
}
