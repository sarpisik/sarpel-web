import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { IndexPageTemplate } from '@components/IndexPageTemplate'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return <IndexPageTemplate {...frontmatter} />
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
              fluid(
                maxWidth: 2048
                maxHeight: 768
                quality: 100
                cropFocus: CENTER
              ) {
                ...GatsbyImageSharpFluid
              }
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
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
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
