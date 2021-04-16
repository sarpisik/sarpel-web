import { Box, Link } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import React from 'react'

const ICON_STYLE = { fontSize: 40 }

export default function Icons(props) {
  const { email } = props

  return (
    <Box display="flex" justifyContent="center" className="footer-child">
      <Link href={`mailto:${email}`}>
        <MailIcon titleAccess="mail icon" style={ICON_STYLE} />
      </Link>
    </Box>
  )
}
