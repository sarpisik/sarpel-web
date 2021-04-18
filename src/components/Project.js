import { Typography } from '@material-ui/core'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import CardWithMedia from './CardWithMedia'
import { SectionCardContainer, SectionSubTitle } from './section'

const STYLE_CAPITALIZED = { textTransform: 'capitalize' }

export function Project({ projects }) {
  return projects.map(({ node: project }) => (
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
}

Project.propTypes = {
  projects: PropTypes.array
}
