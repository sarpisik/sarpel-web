import { Link } from '@components/link'
import { LogoAvatar } from '@components/logo-avatar'
import { LOGOS_ENUM } from '@img/logos'
import { withStyles } from '@material-ui/core/styles'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import { useSiteMetadata } from '@src/hooks/use-site-metadata'
import React from 'react'

const StyledLogoAvatar = withStyles(theme => {
  return { root: { width: theme.spacing(10), margin: 'auto' } }
})(LogoAvatar)

export function Logo() {
  const data = useSiteMetadata(),
    { mode } = useDarkMode()

  return (
    <Link to="/">
      <StyledLogoAvatar
        src={LOGOS_ENUM[mode]}
        alt={`${data.title} brand logo.`}
      />
    </Link>
  )
}
