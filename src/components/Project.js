import { Typography } from '@material-ui/core'
import { graphql, Link, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import CardWithMedia from './CardWithMedia'
import { SectionCardContainer, SectionSubTitle } from './section'

const STYLE_CAPITALIZED = { textTransform: 'capitalize' }

const Project = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark

  return (
    projects &&
    projects.map(({ node: project }) => (
      <SectionCardContainer key={project.id} sm={4} md={3}>
        <CardWithMedia {...project.frontmatter.featuredimage}>
          <SectionSubTitle style={STYLE_CAPITALIZED}>
            {project.frontmatter.title}
          </SectionSubTitle>
          <p>
            <Link style={STYLE_CAPITALIZED} to={project.fields.slug}>
              {project.frontmatter.title}
            </Link>
            <span> &bull; </span>
            <span>{project.frontmatter.date}</span>
          </p>
          <Typography variant="body1" color="initial" align="justify">
            {project.excerpt}
            <br />
            <br />
            <Link to={project.fields.slug}>İncele →</Link>
          </Typography>
        </CardWithMedia>
      </SectionCardContainer>
    ))
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY", locale: "tr")
                featuredpost
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 120
                      height: 120
                      transformOptions: { cropFocus: CENTER }
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Project data={data} count={count} />}
  />
)
