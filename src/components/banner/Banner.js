import { ImageContainer } from '@components/image-container'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import React from 'react'
import { Caption } from './components'

export function Banner(props) {
  const { text, ...banner } = props

  return (
    <ImageContainer>
      <PreviewCompatibleImage imageInfo={banner} />
      <Caption>{text}</Caption>
    </ImageContainer>
  )
}
