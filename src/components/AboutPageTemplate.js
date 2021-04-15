import { Caption } from '@components/caption'
import { Container } from '@components/container'
import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'
import React from 'react'
import Content from './Content'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import { SEO } from './seo'

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
      <SEO title={title} />
      <ImageContainer>
        <PreviewCompatibleImage imageInfo={banner} />
        <Caption>{title}</Caption>
      </ImageContainer>
      <Container paddingX={5} paddingY={10} textAlign="justify">
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
