import { Caption } from '@components/caption'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Card from '@material-ui/core/Card'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(100),
    margin: 'auto',
    '& h1': { marginTop: 0 }
  },
  content: {
    [theme.breakpoints.up('md')]: { padding: theme.spacing(6) },
    [theme.breakpoints.up('lg')]: { padding: theme.spacing(8) }
  }
}))

export const AboutPageTemplate = ({
  title,
  content,
  banner,
  contentComponent
}) => {
  const PageContent = contentComponent || Content,
    styles = useStyles()

  return (
    <>
      <ImageContainer>
        <PreviewCompatibleImage imageInfo={banner} />
        <Caption>{title}</Caption>
      </ImageContainer>
      <Container textAlign="justify">
        <Card className={styles.root}>
          <CardContent className={styles.content}>
            <PageContent content={content} />
          </CardContent>
        </Card>
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
