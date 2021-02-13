import { Box, Link } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import React from 'react'

export default function Icons(props) {
  const { email } = props

  return (
    <Box display="flex" justifyContent="center" className="footer-child">
      <Link href={`mailto:${email}`}>
        <MailIcon />
      </Link>
    </Box>
  )
}
