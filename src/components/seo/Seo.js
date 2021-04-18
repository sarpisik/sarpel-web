import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from './hooks'
import { createFbMeta, createGoogleMeta, createTwitterMeta } from './lib'

export function SEO(props) {
  const { title, description } = props,
    { siteMetadata, logo, email, address } = useSiteMetadata(),
    metaDescription = description || siteMetadata.description,
    name = siteMetadata.title,
    siteUrl = siteMetadata.siteUrl,
    logoUrl = siteMetadata.siteUrl + logo

  return (
    <Helmet
      title={title}
      titleTemplate={`${name} | %s`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        }
      ]
        .concat(createGoogleMeta(name, metaDescription, logoUrl))
        .concat(createFbMeta(siteUrl, title, logoUrl, metaDescription))
        .concat(createTwitterMeta(siteUrl, title, description, logoUrl))}
    >
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: siteUrl,
          logo: logoUrl,
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
