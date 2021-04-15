import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '@components/AboutPageTemplate'

const AboutPagePreview = ({ entry, widgetFor }) => {
  debugger
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      banner={entry.getIn(['data', 'banner'])}
      content={widgetFor('body')}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default AboutPagePreview
