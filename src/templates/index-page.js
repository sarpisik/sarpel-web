import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export const IndexPageTemplate = props => {
  const { banners, whatWeDo, whyUs } = props

  return (
    <React.Fragment>
      {/* Banners */}
      {banners.map(_banner => {
        const { text, ...banner } = _banner
        return (
          <React.Fragment key={text}>
            <PreviewCompatibleImage imageInfo={banner} />
            <Typography variant="caption" color="initial">
              {text}
            </Typography>
          </React.Fragment>
        )
      })}
      <Box padding={3}>
        <Grid container spacing={10}>
          {/* What We Do */}
          <Grid item xs={12}>
            <SectionTitle>{whatWeDo.title}</SectionTitle>
            {whatWeDo.works.map(work => {
              const { title, description } = work

              return (
                <React.Fragment key={title}>
                  <SectionSubTitle>{title}</SectionSubTitle>
                  <Typography variant="body1" color="initial">
                    {description}
                  </Typography>
                </React.Fragment>
              )
            })}
          </Grid>

          <Grid item xs={12}>
            {/* Why Us */}
            <SectionTitle>{whyUs.title}</SectionTitle>
            {whyUs.reasons.map(reason => {
              const { title, description, icon } = reason

              return (
                <React.Fragment key={title}>
                  <SectionSubTitle>{title}</SectionSubTitle>
                  <Typography variant="body1" color="initial">
                    {description}
                  </Typography>
                </React.Fragment>
              )
            })}
          </Grid>
        </Grid>
      </Box>
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
              fluid(maxWidth: 2048, quality: 100) {
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
          }
        }
        whyUs {
          title
          reasons {
            description
            title
          }
        }
      }
    }
  }
`

function SectionTitle(props) {
  return (
    <Typography {...props} variant="h4" component="h2" color="textPrimary" />
  )
}

function SectionSubTitle(props) {
  return (
    <Typography {...props} variant="h5" component="h3" color="textPrimary" />
  )
}
