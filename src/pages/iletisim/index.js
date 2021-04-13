import { graphql } from 'gatsby'
import React from 'react'
import { ContactPageTemplate } from '../../templates/contact-page'

export default function ContactPage({ data }) {
  const { file: image, markdownRemark } = data

  return (
    <ContactPageTemplate
      {...markdownRemark.frontmatter}
      banner={{ image }}
      title="İletişim"
    />
  )
}

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "company" } }) {
      frontmatter {
        email
        address
        phones {
          phone
        }
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
