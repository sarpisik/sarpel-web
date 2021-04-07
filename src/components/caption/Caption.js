import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const StyledCaption = withStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: theme.spacing(0.5, 1),
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  }
}))(Box)

export function Caption(props) {
  return (
    <StyledCaption>
      <Typography variant="h3" component="span" color="inherit" {...props} />
    </StyledCaption>
  )
}
