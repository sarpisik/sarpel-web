import React from 'react'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'

import { Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import darkLogo from '@img/logos/logo_solid.svg'
import lightLogo from '@img/logos/logo_solid.svg'
import { Link } from '@components/link'

const ENUM = { light: lightLogo, dark: darkLogo }

const StyledAvatar = withStyles(theme => ({
  root: { height: 'auto', padding: theme.spacing(0.5) },
  img: { marginBottom: 0 }
}))(Avatar)

const query = graphql`
  query BrandLogoQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export function Logo({ theme }) {
  const data = useStaticQuery(query),
    { title } = data.site.siteMetadata

  return (
    <Link to="/">
      <StyledAvatar
        src={ENUM[theme]}
        alt={`${title} brand logo.`}
        variant="square"
      />
    </Link>
  )
}

Logo.propTypes = {
  theme: PropTypes.oneOf(Object.keys(ENUM)).isRequired
}
