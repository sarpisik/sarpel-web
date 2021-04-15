import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

const Image = props => <GatsbyImage style={{ display: 'block' }} {...props} />

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return <Image image={image.childImageSharp.gatsbyImageData} alt={alt} />
  }

  if (!!childImageSharp) {
    return <Image image={childImageSharp.gatsbyImageData} alt={alt} />
  }

  if (!!image && typeof image === 'string') return <img src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
}

export default PreviewCompatibleImage
