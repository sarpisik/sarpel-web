import React from 'react'
import PropTypes from 'prop-types'
import { ProjectTemplate } from '../../templates/project-page'

const ProjectPreview = ({ entry, widgetFor }) => {
  // const tags = entry.getIn(['data', 'tags'])
  return (
    <ProjectTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      // tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ProjectPreview
