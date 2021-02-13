import React from 'react'
import { Box, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Copyright, Icons } from './components'
import { useSiteMetadata } from '@src/hooks/use-site-metadata'

const StyledToolbar = withStyles(theme => {
  const spacing = theme.spacing(5)
  return {
    root: {
      paddingTop: spacing,
      paddingBottom: spacing,
      '& > .footer-child': { paddingBottom: spacing }
    }
  }
})(Box)

const StyledFooter = withStyles(theme => {
  return {
    root: {
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900]
    }
  }
})(Paper)

export default function Footer() {
  const data = useSiteMetadata(),
    { title, email } = data

  return (
    <StyledFooter component="footer" elevation={4} square>
      <StyledToolbar>
        <Icons email={email} />
        <Copyright name={title} />
      </StyledToolbar>
    </StyledFooter>
  )
}
