import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '@components/IndexPageTemplate'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        banners={data.banners || []}
        whatWeDo={
          data.whatWeDo || {
            title: '',
            works: [{ title: '', description: '' }]
          }
        }
        whyUs={
          data.whyUs || {
            title: '',
            reasons: [{ title: '', description: '', icon: '' }]
          }
        }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
}

export default IndexPagePreview
