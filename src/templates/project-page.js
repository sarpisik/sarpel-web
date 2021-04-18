import { HTMLContent } from '@components/Content'
import { ProjectPageTemplate } from '@components/ProjectPageTemplate'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Project = ({ data }) => {
  const { markdownRemark: project } = data

  return (
    <ProjectPageTemplate
      content={project.html}
      contentComponent={HTMLContent}
      description={project.frontmatter.description}
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
        startDate(formatString: "MMMM, YYYY", locale: "tr")
        endDate(formatString: "MMMM, YYYY", locale: "tr")
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
