import { Caption } from '@components/caption'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Project from '@components/Project'
import { Section } from '@components/section'
import { SEO } from '@components/seo'
import { Grid } from '@material-ui/core'
import React from 'react'

export const ProjectsPageTemplate = ({ banner, title }) => {
  return (
    <React.Fragment>
      <SEO title={title} />
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
    </React.Fragment>
  )
}
