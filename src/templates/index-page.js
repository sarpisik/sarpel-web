import CardWithMedia from '@components/CardWithMedia'
import TypographyBold from '@components/TypographyBold'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Carousel from 'react-material-ui-carousel'

import StarIcon from '@material-ui/icons/Star'
import GroupIcon from '@material-ui/icons/Group'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import EcoIcon from '@material-ui/icons/Eco'
import CardWithHeight from '@components/CardWithHeight'
import CardContent from '@material-ui/core/CardContent'
import { Banner } from '@components/banner'
import { Container } from '@components/container'

const ICONS = {
  star: StarIcon,
  group: GroupIcon,
  howToReg: HowToRegIcon,
  turnedIn: TurnedInIcon,
  eco: EcoIcon
}

export const IndexPageTemplate = props => {
  const { banners, whatWeDo, whyUs } = props

  return (
    <React.Fragment>
      {/* Banners */}
      <Carousel>{banners.map(renderBanner)}</Carousel>

      <Container padding={5}>
        <Grid container spacing={5}>
          {/* What We Do */}
          <Section title={whatWeDo.title}>
            {whatWeDo.works.map(work => {
              const { title, description, ...image } = work

              return (
                <SectionCardContainer key={title}>
                  <CardWithMedia {...image}>
                    <SectionSubTitle>{title}</SectionSubTitle>
                    <Typography variant="body1" color="initial" align="justify">
                      {description}
                    </Typography>
                  </CardWithMedia>
                </SectionCardContainer>
              )
            })}
          </Section>

          {/* Why Us */}
          <Section title={whyUs.title}>
            {whyUs.reasons.map(reason => {
              const { title, description, icon } = reason,
                Icon = ICONS[icon]

              return (
                <SectionCardContainer key={title}>
                  <CardWithHeight>
                    {Icon && (
                      <CardContent>
                        <Box textAlign="center">
                          <Icon style={{ fontSize: 80 }} />
                        </Box>
                      </CardContent>
                    )}
                    <CardContent>
                      <SectionSubTitle align="center">{title}</SectionSubTitle>
                      <Typography
                        variant="body1"
                        color="initial"
                        align="center"
                      >
                        {description}
                      </Typography>
                    </CardContent>
                  </CardWithHeight>
                </SectionCardContainer>
              )
            })}
          </Section>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

IndexPageTemplate.propTypes = {
  whatWeDo: PropTypes.shape({ title: PropTypes.string.isRequired }),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return <IndexPageTemplate {...frontmatter} />
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        banners {
          image {
            childImageSharp {
              fluid(
                maxWidth: 2048
                maxHeight: 768
                quality: 100
                cropFocus: CENTER
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        whatWeDo {
          title
          works {
            description
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        whyUs {
          title
          reasons {
            description
            title
            icon
          }
        }
      }
    }
  }
`

function renderBanner(props) {
  return <Banner {...props} />
}

function Section(props) {
  const { children, title } = props

  return (
    <Grid container item>
      <Grid item xs={12}>
        <SectionTitle>{title}</SectionTitle>
      </Grid>
      <Grid item container spacing={5} justify="center">
        {children}
      </Grid>
    </Grid>
  )
}

function SectionCardContainer(props) {
  return <Grid {...props} item xs={12} sm={6} md={4} />
}

function SectionTitle(props) {
  return (
    <Box marginY={5}>
      <TitleWithMargin
        {...props}
        variant="h4"
        component="h2"
        color="textPrimary"
        align="center"
      />
    </Box>
  )
}

function SectionSubTitle(props) {
  return (
    <TitleWithMargin
      {...props}
      variant="h5"
      component="h3"
      color="textPrimary"
    />
  )
}

function TitleWithMargin(props) {
  return <TypographyBold {...props} gutterBottom />
}
