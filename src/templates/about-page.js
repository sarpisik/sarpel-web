import { Caption } from '@components/caption'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
  title,
  content,
  banner,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <ImageContainer>
        <PreviewCompatibleImage imageInfo={banner} />
        <Caption>{title}</Caption>
      </ImageContainer>
      <Container>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      banner={post.frontmatter.banner}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        banner {
          image {
            childImageSharp {
              fluid(
                maxWidth: 2048
                maxHeight: 512
                quality: 100
                cropFocus: CENTER
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`
