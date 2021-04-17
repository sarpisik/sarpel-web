import CardWithHeight from '@components/CardWithHeight'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import { CardContent, CardMedia } from '@material-ui/core'
import React from 'react'

export default function CardWithMedia(props) {
  const { children, ...image } = props

  return (
    <CardWithHeight>
      <CardMedia
        component={() => <PreviewCompatibleImage imageInfo={image} />}
      />
      <CardContent>{children}</CardContent>
    </CardWithHeight>
  )
}
