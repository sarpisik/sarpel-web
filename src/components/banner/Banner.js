import PreviewCompatibleImage from '@components/PreviewCompatibleImage'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { Caption } from './components'

const StyledPaper = withStyles({
  root: { position: 'relative' }
})(Paper)

export function Banner(props) {
  const { text, ...banner } = props

  return (
    <StyledPaper key={text}>
      <PreviewCompatibleImage imageInfo={banner} />
      <Caption>{text}</Caption>
    </StyledPaper>
  )
}
