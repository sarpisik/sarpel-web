import { Section, SectionCardContainer } from '@components/section'
import { Link, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  Email as EmailIcon,
  Navigation as NavigationIcon,
  PhoneInTalk as PhoneInTalkIcon
} from '@material-ui/icons'
import React from 'react'
import { StyledDynamicColor } from './lib/styled-dynamic-color'

const ICON_SIZE = { fontSize: 80 },
  CENTER = { textAlign: 'center' },
  StyledSection = withStyles(theme => ({
    root: { color: theme.palette.primary.main, fontWeight: 'bold' }
  }))(Section),
  StyledBoldTypography = StyledDynamicColor(BoldTypography),
  StyledLink = StyledDynamicColor(Link)

export function ContactIcons({ address, phones, email, ...rest }) {
  return (
    <StyledSection {...rest}>
      <IconContainer>
        <NavigationIcon style={ICON_SIZE} />
        <StyledBoldTypography>{address}</StyledBoldTypography>
      </IconContainer>
      <IconContainer>
        <PhoneInTalkIcon style={ICON_SIZE} />
        {phones.map(({ phone }) => (
          <StyledBoldTypography key={phone}>{phone}</StyledBoldTypography>
        ))}
      </IconContainer>
      <IconContainer>
        <EmailIcon style={ICON_SIZE} />
        <StyledLink href={`mailto:${email}`} display="block" color="initial">
          {email}
        </StyledLink>
      </IconContainer>
    </StyledSection>
  )
}

function IconContainer(props) {
  return <SectionCardContainer style={CENTER} sm={4} md={3} {...props} />
}

function BoldTypography(props) {
  return (
    <Typography display="block" variant="inherit" color="initial" {...props} />
  )
}
