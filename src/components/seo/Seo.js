import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from './hooks'

export function SEO(props) {
  const { title, description } = props,
    siteMetadata = useSiteMetadata(),
    metaDescription = description || siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`${siteMetadata.title} | %s`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        }
      ]}
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
