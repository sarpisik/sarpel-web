import { Link } from '@components/link'
import { LogoAvatar } from '@components/logo-avatar'
import {
  default as darkLogo,
  default as lightLogo
} from '@img/logos/logo_solid.svg'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import { useSiteMetadata } from '@src/hooks/use-site-metadata'
import React from 'react'

const ENUM = { light: lightLogo, dark: darkLogo }

export function Logo() {
  const data = useSiteMetadata(),
    { mode } = useDarkMode()

  return (
    <Link to="/">
      <LogoAvatar src={ENUM[mode]} alt={`${data.title} brand logo.`} />
    </Link>
  )
}
