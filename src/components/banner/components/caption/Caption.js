import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const StyledCaption = withStyles(theme => ({
  root: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: theme.spacing(0.5, 1)
  }
}))(Box)

export function Caption(props) {
  return (
    <StyledCaption>
      <Typography {...props} variant="caption" color="initial" />
    </StyledCaption>
  )
}
