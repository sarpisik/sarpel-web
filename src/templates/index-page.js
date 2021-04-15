import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { IndexPageTemplate } from '@components/IndexPageTemplate'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return <IndexPageTemplate {...frontmatter} title="Ana Sayfa" />
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        banners {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 2048
                height: 768
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          text
        }
        whatWeDo {
          title
          works {
            description
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 1280, quality: 50, layout: CONSTRAINED)
              }
            }
          }
        }
        whyUs {
          title
          reasons {
            description
            title
            icon
          }
        }
      }
    }
  }
`
