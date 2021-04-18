import { Caption } from '@components/caption'
import { ContactIcons } from '@components/contact-icons'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import { Map } from '@components/map'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import { SEO } from '@components/seo'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export function ContactPageTemplate(props) {
  const { banner, title, email, address, phones } = props

  return (
    <React.Fragment>
      <SEO title={title} />
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
    </React.Fragment>
  )
}

ContactPageTemplate.propTypes = {
  banner: PreviewCompatibleImage.propTypes.imageInfo,
  title: PropTypes.string.isRequired,
  ...ContactIcons.propTypes
}
