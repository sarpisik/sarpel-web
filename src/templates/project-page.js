import { HTMLContent } from '@components/Content'
import { ProjectPageTemplate } from '@components/ProjectPageTemplate'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const Project = ({ data }) => {
  const { markdownRemark: project } = data

  return (
    <ProjectPageTemplate
      content={project.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${project.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${project.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={project.frontmatter.tags}
      title={project.frontmatter.title}
      status={project.frontmatter.status}
      location={project.frontmatter.location}
      featuredimage={project.frontmatter.featuredimage}
    />
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "tr")
        title
        status
        location
        description
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
