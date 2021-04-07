import Typography from '@material-ui/core/Typography'
import { graphql, Link, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import CardWithMedia from './CardWithMedia'
import { SectionCardContainer, SectionSubTitle } from './section'

class Project extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      projects &&
      projects.map(({ node: project }) => (
        <SectionCardContainer key={project.id} sm={4} md={3}>
          <CardWithMedia {...project.frontmatter.featuredimage}>
            <SectionSubTitle>{project.frontmatter.title}</SectionSubTitle>
            <p className="project-meta">
              <Link to={project.fields.slug}>{project.frontmatter.title}</Link>
              <span> &bull; </span>
              <span className="subtitle is-size-5 is-block">
                {project.frontmatter.date}
              </span>
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
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(
                      maxWidth: 120
                      maxHeight: 60
                      quality: 100
                      cropFocus: CENTER
                    ) {
                      ...GatsbyImageSharpFluid
                    }
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
