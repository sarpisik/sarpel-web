import Grid from '@material-ui/core/Grid'
import React from 'react'
import TypographyBold from '@components/TypographyBold'
import Box from '@material-ui/core/Box'

export function Section(props) {
  const { children, title } = props

  return (
    <Grid container item>
      {title && (
        <Grid item xs={12}>
          <SectionTitle>{title}</SectionTitle>
        </Grid>
      )}
      <Grid item container spacing={5} justify="center">
        {children}
      </Grid>
    </Grid>
  )
}

export function SectionTitle(props) {
  return (
    <Box marginY={5}>
      <TitleWithMargin
        {...props}
        variant="h4"
        component="h2"
        color="textPrimary"
        align="center"
      />
    </Box>
  )
}

export function SectionSubTitle(props) {
  return (
    <TitleWithMargin
      {...props}
      variant="h5"
      component="h3"
      color="textPrimary"
    />
  )
}

export function SectionCardContainer(props) {
  return <Grid item xs={12} sm={6} md={4} {...props} />
}

function TitleWithMargin(props) {
  return <TypographyBold {...props} gutterBottom />
}
