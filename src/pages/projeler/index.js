import React from 'react'
import Project from '../../components/Project'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Container } from '@components/container'
import Grid from '@material-ui/core/Grid'
import { Section } from '@components/section'
import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import { Caption } from '@components/caption'

export const ProjectsPageTemplate = ({ banner, title }) => {
  return (
    <>
      <ImageContainer>
        <PreviewCompatibleImage imageInfo={banner} />
        <Caption component="h1">{title}</Caption>
      </ImageContainer>
      <Container paddingX={5} paddingY={10}>
        <Grid container spacing={5}>
          <Section>
            <Project />
          </Section>
        </Grid>
      </Container>
    </>
  )
}

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
