import { Banner } from '@components/banner'
import CardWithHeight from '@components/CardWithHeight'
import CardWithMedia from '@components/CardWithMedia'
import { Container } from '@components/container'
import {
  Section,
  SectionCardContainer,
  SectionSubTitle
} from '@components/section'
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import EcoIcon from '@material-ui/icons/Eco'
import GroupIcon from '@material-ui/icons/Group'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import StarIcon from '@material-ui/icons/Star'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import PropTypes from 'prop-types'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { SEO } from './seo'

const ICONS = {
  star: StarIcon,
  group: GroupIcon,
  howToReg: HowToRegIcon,
  turnedIn: TurnedInIcon,
  eco: EcoIcon
}

export const IndexPageTemplate = props => {
  const { banners, whatWeDo, whyUs, ...seo } = props

  return (
    <React.Fragment>
      <SEO {...seo} />
      {/* Banners */}
      <Carousel indicators={false}>{banners.map(renderBanner)}</Carousel>

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
function renderBanner(props) {
  return <Banner key={props.text} {...props} />
}
