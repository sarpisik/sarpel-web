import React from 'react'
import PropTypes from 'prop-types'
import { ProjectPageTemplate } from '@components/ProjectPageTemplate'

const ProjectPreview = ({ entry, widgetFor }) => {
  // const tags = entry.getIn(['data', 'tags'])
  return (
    <ProjectPageTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      // tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      status={entry.getIn(['data', 'status'])}
      location={entry.getIn(['data', 'location'])}
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
