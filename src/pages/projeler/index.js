import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { ProjectsPageTemplate } from '@templates/projects-page'

const ProjectsPage = ({ data }) => {
  const { file: image } = data

  return <ProjectsPageTemplate banner={{ image }} title="Projelerimiz" />
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  {
    file(name: { eq: "projects_banner" }) {
      childImageSharp {
        fluid(maxWidth: 2048, maxHeight: 512, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
