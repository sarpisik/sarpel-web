import { Caption } from '@components/caption'
import { ContactIcons } from '@components/contact-icons'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import { Map } from '@components/map'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Grid from '@material-ui/core/Grid'
import React from 'react'

export function ContactPageTemplate(props) {
  const { banner, title, email, address, phones } = props

  return (
    <>
      <ImageContainer>
        <PreviewCompatibleImage imageInfo={banner} />
        <Caption component="h1">{title}</Caption>
      </ImageContainer>
      <Container paddingX={5} paddingY={10}>
        <Grid container spacing={10}>
          <ContactIcons
            address={address}
            phones={phones}
            email={email}
            spacing={10}
          />
          <Map spacing={10} />
        </Grid>
      </Container>
    </>
  )
}