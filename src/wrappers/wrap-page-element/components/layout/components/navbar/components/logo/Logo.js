import { Link } from '@components/link'
import {
  default as darkLogo,
  default as lightLogo
} from '@img/logos/logo_solid.svg'
import Avatar from '@material-ui/core/Avatar'
import withStyles from '@material-ui/core/styles/withStyles'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import { useSiteMetadata } from '@src/hooks/use-site-metadata'
import React from 'react'

const ENUM = { light: lightLogo, dark: darkLogo }

const StyledAvatar = withStyles(theme => ({
  root: { height: 'auto', padding: theme.spacing(0.5) },
  img: { marginBottom: 0 }
}))(Avatar)

export function Logo() {
  const data = useSiteMetadata(),
    { mode } = useDarkMode()

  return (
    <Link to="/">
      <StyledAvatar
        src={ENUM[mode]}
        alt={`${data.title} brand logo.`}
        variant="square"
      />
    </Link>
  )
}
