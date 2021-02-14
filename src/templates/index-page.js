import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Typography from '@material-ui/core/Typography'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import BlogRoll from '../components/BlogRoll'
import Features from '../components/Features'

export const IndexPageTemplate = props => {
  const { banners, whatWeDo, whyUs } = props

  return (
    <div>
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
      {/* What We Do */}
      <Typography variant="h1" color="textPrimary">
        {whatWeDo.title}
      </Typography>
      {whatWeDo.works.map(work => {
        const { title, description } = work

        return (
          <React.Fragment key={title}>
            <Typography variant="h2" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="body1" color="initial">
              {description}
            </Typography>
          </React.Fragment>
        )
      })}

      {/* Why Us */}
      <Typography variant="h1" color="textPrimary">
        {whyUs.title}
      </Typography>
      {whyUs.reasons.map(reason => {
        const { title, description, icon } = reason

        return (
          <React.Fragment key={title}>
            <Typography variant="h2" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="body1" color="initial">
              {description}
            </Typography>
          </React.Fragment>
        )
      })}
    </div>
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
