import { Container } from '@components/container'
import { Section, SectionCardContainer } from '@components/section'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Grid from '@material-ui/core/Grid'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Typography from '@material-ui/core/Typography'
import TypographyCapitalized from '@components/TypographyCapitalized'
import TypographyBold from '@components/TypographyBold'
import CardWithHeight from '@components/CardWithHeight'
import CardContent from '@material-ui/core/CardContent'

const Capitalized = props => (
  <div {...props} style={{ textTransform: 'capitalize' }} />
)

export const ProjectTemplate = ({
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
                <TypographyCapitalized
                  variant="h3"
                  component="h1"
                  textTransform="capitalize"
                  gutterBottom
                >
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

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const Project = ({ data }) => {
  const { markdownRemark: project } = data

  return (
    <ProjectTemplate
      content={project.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${project.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${project.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={project.frontmatter.tags}
      title={project.frontmatter.title}
      status={project.frontmatter.status}
      location={project.frontmatter.location}
      featuredimage={project.frontmatter.featuredimage}
    />
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "tr")
        title
        status
        location
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
