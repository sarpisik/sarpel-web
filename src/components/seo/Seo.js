import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from './hooks'

export function SEO(props) {
  const { title, description } = props,
    siteMetadata = useSiteMetadata()

  return (
    <Helmet
      title={title}
      description={description}
      titleTemplate={`${siteMetadata.title} | %s`}
    />
  )
}

SEO.defaultProps = {
  description: ''
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}
