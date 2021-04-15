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
        gatsbyImageData(
          width: 2048
          height: 512
          quality: 100
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`
