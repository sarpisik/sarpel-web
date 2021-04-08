import { Caption } from '@components/caption'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Typography from '@material-ui/core/Typography'
import { graphql } from 'gatsby'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import { Section, SectionCardContainer } from '@components/section'
import CardWithHeight from '@components/CardWithHeight'

const ContactPageTemplate = props => {
  const { banner, title, email, address, phones } = props

  return (
    <>
      <ImageContainer>
        <PreviewCompatibleImage imageInfo={banner} />
        <Caption component="h1">{title}</Caption>
      </ImageContainer>
      <Container paddingX={5} paddingY={10}>
        <Grid container spacing={5}>
          <Section>
            <SectionCardContainer sm={4} md={3}>
              {/* MAP */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.8723042609554!2d28.96635861531495!3d40.211903375995085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca16a76cdb5bc9%3A0xd0915549c7420301!2zQmXFn2V2bGVyLCBZxLFsZMSxcsSxbSBDZC4gTm86Mjc0LCAxNjExMCBOaWzDvGZlci9CdXJzYQ!5e0!3m2!1str!2str!4v1613308509883!5m2!1str!2str"
                width="800"
                height="400"
                frameborder="0"
                style={{ border: 0, maxWidth: '100%' }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </SectionCardContainer>
            <SectionCardContainer sm={4} md={3}>
              <CardWithHeight>
                <CardContent>
                  <Typography variant="body1" color="initial">
                    {address}
                  </Typography>
                  {phones.map(phone => (
                    <Typography key={phone} variant="body2" color="initial">
                      {phone}
                    </Typography>
                  ))}
                </CardContent>
              </CardWithHeight>
            </SectionCardContainer>
          </Section>
        </Grid>
      </Container>
    </>
  )
}

const ContactPage = ({ data }) => {
  const { file: image, site } = data

  return (
    <ContactPageTemplate
      {...site.siteMetadata}
      banner={{ image }}
      title="İletişim"
    />
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    site {
      siteMetadata {
        email
        address
        phones
      }
    }
    file(name: { eq: "contact_banner" }) {
      childImageSharp {
        fluid(maxWidth: 2048, maxHeight: 512, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
