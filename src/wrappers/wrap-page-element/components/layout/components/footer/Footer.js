import { LogoAvatar } from '@components/logo-avatar'
import lightLogo from '@img/logos/logo.svg'
import darkLogo from '@img/logos/logo_dark_mode.svg'
import Box from '@material-ui/core/Box/Box'
import Paper from '@material-ui/core/Paper/Paper'
import { withStyles } from '@material-ui/core/styles'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import { useSiteMetadata } from '@src/hooks/use-site-metadata'
import React from 'react'
import { Icons } from '../Icons'
import { Copyright } from './components'

const ENUM = { light: lightLogo, dark: darkLogo }

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
    { title, email } = data,
    { mode } = useDarkMode()

  return (
    <StyledFooter component="footer" elevation={4} square>
      <StyledToolbar>
        <LogoAvatar src={ENUM[mode]} alt={`${data.title} brand logo.`} />
        <Icons email={email} />
        <Copyright name={title} />
      </StyledToolbar>
    </StyledFooter>
  )
}
