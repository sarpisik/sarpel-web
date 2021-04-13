import { Link } from '@components/link'
import { LogoAvatar } from '@components/logo-avatar'
import { LOGOS_ENUM } from '@img/logos'
import { withStyles } from '@material-ui/core/styles'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import { useGlobalMetadata } from '@hooks/use-global-metadata'
import React from 'react'

const StyledLogoAvatar = withStyles(theme => {
  return { root: { width: theme.spacing(10), margin: 'auto' } }
})(LogoAvatar)

export function Logo() {
  const { mode } = useDarkMode()

  return (
    <Link to="/">
      <StyledLogoAvatar
        src={LOGOS_ENUM[mode]}
        alt={`${useGlobalMetadata().title} brand logo.`}
      />
    </Link>
  )
}
