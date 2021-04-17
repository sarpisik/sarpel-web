import { Section, SectionCardContainer } from '@components/section'
import { Link, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  Email as EmailIcon,
  Navigation as NavigationIcon,
  PhoneInTalk as PhoneInTalkIcon
} from '@material-ui/icons'
import React from 'react'

const ICON_SIZE = { fontSize: 80 },
  CENTER = { textAlign: 'center' },
  StyledSection = withStyles(theme => ({
    root: { color: theme.palette.primary.main, fontWeight: 'bold' }
  }))(Section)

export function ContactIcons({ address, phones, email, ...rest }) {
  return (
    <StyledSection {...rest}>
      <IconContainer>
        <NavigationIcon style={ICON_SIZE} />
        <BoldTypography>{address}</BoldTypography>
      </IconContainer>
      <IconContainer>
        <PhoneInTalkIcon style={ICON_SIZE} />
        {phones.map(({ phone }) => (
          <BoldTypography key={phone}>{phone}</BoldTypography>
        ))}
      </IconContainer>
      <IconContainer>
        <EmailIcon style={ICON_SIZE} />
        <Link href={`mailto:${email}`} display="block" color="initial">
          {email}
        </Link>
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
