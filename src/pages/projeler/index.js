import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { ProjectsPageTemplate } from '@templates/projects-page'

const ProjectsPage = ({ data }) => {
  const { file: image, allMarkdownRemark } = data

  return (
    <ProjectsPageTemplate
      banner={{ image }}
      projects={allMarkdownRemark.edges}
      title="Projelerimiz"
    />
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  {
    file(name: { eq: "projects_banner" }) {
      childImageSharp {
        gatsbyImageData(
          width: 2048
          height: 512
          quality: 50
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM, YYYY", locale: "tr")
            featuredpost
            featuredimage {
              childImageSharp {
                gatsbyImageData(
                  width: 120
                  height: 120
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
