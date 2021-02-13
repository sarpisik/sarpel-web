import { Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export const Link = React.forwardRef(function Link(props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />
})
