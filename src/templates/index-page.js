import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Typography from '@material-ui/core/Typography'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import BlogRoll from '../components/BlogRoll'
import Features from '../components/Features'

export const IndexPageTemplate = props => {
  const {
    banners,
    whatWeDo,
    whyUs,
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro
  } = props

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
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
