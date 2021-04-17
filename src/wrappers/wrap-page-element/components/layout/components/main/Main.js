import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledBox = withStyles({
  root: { height: '100%' }
})(Box)

export default function Main(props) {
  return <StyledBox component="main" {...props} />
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
