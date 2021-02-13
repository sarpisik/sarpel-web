import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getFullYear } from '@src/helpers/get-full-year'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles({ body2: { fontWeight: 700 } })

export default function Copyright({ name }) {
  return (
    <Typography classes={useStyles()} variant="body2" align="center">
      © {getFullYear()}, {name}
    </Typography>
  )
}

Copyright.propTypes = {
  name: PropTypes.string.isRequired
}
