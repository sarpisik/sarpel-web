import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { HTMLContent } from '@components/Content'
import { AboutPageTemplate } from '@components/AboutPageTemplate'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      banner={post.frontmatter.banner}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`query AboutPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      banner {
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              transformOptions: {cropFocus: CENTER}
              layout: FULL_WIDTH
            )
          }
        }
        alt
      }
    }
  }
}
`
