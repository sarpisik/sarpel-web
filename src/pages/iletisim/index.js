import { graphql } from 'gatsby'
import React from 'react'
import { ContactPageTemplate } from '../../templates/contact-page'

export default function ContactPage({ data }) {
  const { file: image, site } = data

  return (
    <ContactPageTemplate
      {...site.siteMetadata}
      banner={{ image }}
      title="İletişim"
    />
  )
}

export const pageQuery = graphql`
  query ContactPageTemplate {
    site {
      siteMetadata {
        email
        address
        phones
      }
    }
    file(name: { eq: "contact_banner" }) {
      childImageSharp {
        fluid(maxWidth: 2048, maxHeight: 512, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
