import CardWithHeight from '@components/CardWithHeight'
import { Container } from '@components/container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import { Section, SectionCardContainer } from '@components/section'
import TypographyBold from '@components/TypographyBold'
import TypographyCapitalized from '@components/TypographyCapitalized'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import Content from './Content'

const Capitalized = props => (
  <div {...props} style={{ textTransform: 'capitalize' }} />
)

export const ProjectPageTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  status,
  location,
  helmet,
  featuredimage
}) => {
  const PostContent = contentComponent || Content

  return (
    <Container paddingX={5} paddingY={10}>
      {helmet || ''}
      <Grid container spacing={5}>
        <Section>
          <SectionCardContainer sm={6}>
            <PreviewCompatibleImage imageInfo={featuredimage} />
          </SectionCardContainer>
          <SectionCardContainer sm={6}>
            <CardWithHeight>
              <CardContent>
                <TypographyCapitalized variant="h3" component="h1" gutterBottom>
                  {title}
                </TypographyCapitalized>
                <Capitalized>
                  <TypographyBold>{'Yer: '.concat(location)}</TypographyBold>
                </Capitalized>
                <Capitalized>
                  <TypographyBold>
                    {'Durum: '.concat(
                      status === 'finished' ? 'Tamamlandı' : 'Devam ediyor'
                    )}
                  </TypographyBold>
                </Capitalized>
                <PostContent content={content} />
                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <Typography variant="h5" component="h2">
                      Etiketler
                    </Typography>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </CardContent>
            </CardWithHeight>
          </SectionCardContainer>
        </Section>
      </Grid>
    </Container>
  )
}

ProjectPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}
