import { LogoAvatar } from '@components/logo-avatar'
import { LOGOS_ENUM } from '@img/logos'
import Box from '@material-ui/core/Box/Box'
import Paper from '@material-ui/core/Paper/Paper'
import { withStyles } from '@material-ui/core/styles'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import { useSiteMetadata } from '@src/hooks/use-site-metadata'
import React from 'react'
import { Icons } from '../Icons'
import { Copyright } from './components'

const StyledToolbar = withStyles(theme => {
  const spacing = theme.spacing(5)
  return {
    root: {
      paddingTop: spacing,
      paddingBottom: spacing,
      '& > div': {
        paddingBottom: spacing
      }
    }
  }
})(Box)

const StyledLogoAvatar = withStyles(theme => {
  return { root: { width: theme.spacing(15), margin: 'auto' } }
})(LogoAvatar)

export default function Footer() {
  const data = useSiteMetadata(),
    { title, email } = data,
    { mode } = useDarkMode()

  return (
    <Paper component="footer" elevation={4} square>
      <StyledToolbar>
        <StyledLogoAvatar
          src={LOGOS_ENUM[mode]}
          alt={`${data.title} brand logo.`}
        />
        <Icons email={email} />
        <Copyright name={title} />
      </StyledToolbar>
    </Paper>
  )
}
