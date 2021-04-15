import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

export function SEO(props) {
  const { title, description } = props

  return <Helmet title={title} description={description} />
}

// SEO.defaultProps={
//   title:'',description:''
// }

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
