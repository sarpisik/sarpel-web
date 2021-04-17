import { LogoAvatar } from '@components/logo-avatar'
import { Toolbar } from '@components/toolbar'
import { useCompanyMetadata } from '@hooks/use-company-metadata'
import { useGlobalMetadata } from '@hooks/use-global-metadata'
import { LOGOS_ENUM } from '@img/logos'
import { Box, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import React from 'react'
import { Icons } from '../Icons'
import { Copyright } from './components'

const StyledToolbar = withStyles(theme => {
    const spacing = theme.spacing(5)
    return {
      root: {
        display: 'block',
        paddingTop: spacing,
        paddingBottom: spacing,
        '& > div': {
          paddingBottom: spacing
        }
      }
    }
  })(Toolbar),
  StyledContainer = withStyles(theme => {
    const spacing = theme.spacing(5)
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          '& > div:first-child': {
            paddingBottom: spacing
          }
        }
      }
    }
  })(Box),
  StyledLogoAvatar = withStyles(theme => {
    return { root: { width: theme.spacing(15) } }
  })(LogoAvatar)

export default function Footer() {
  const { title } = useGlobalMetadata(),
    { email } = useCompanyMetadata(),
    { mode } = useDarkMode()

  return (
    <Paper component="footer" elevation={4} square>
      <StyledToolbar>
        <StyledContainer>
          <StyledLogoAvatar
            src={LOGOS_ENUM[mode]}
            alt={`${title} brand logo.`}
          />
          <Icons email={email} />
        </StyledContainer>
        <Copyright name={title} />
      </StyledToolbar>
    </Paper>
  )
}
