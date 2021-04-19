import { Box } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

export function Wrapper(props) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" {...props} />
  )
}

Wrapper.propTypes = PropTypes.shape(Box.propTypes)
