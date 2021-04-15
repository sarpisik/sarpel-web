import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from './hooks'

export function SEO(props) {
  const { title, description } = props,
    { siteMetadata, logo, email, address } = useSiteMetadata(),
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
    >
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: siteMetadata.siteUrl,
          logo: siteMetadata.siteUrl + logo,
          email,
          address
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ''
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}
