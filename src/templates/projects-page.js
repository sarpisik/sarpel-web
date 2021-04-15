import { Caption } from '@components/caption'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import { Section } from '@components/section'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Project from '@components/Project'

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
