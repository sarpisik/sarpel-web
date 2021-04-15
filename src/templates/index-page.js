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

export const pageQuery = graphql`query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      banners {
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              transformOptions: {cropFocus: CENTER}
              layout: FULL_WIDTH
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
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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
