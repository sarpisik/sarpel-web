import Typography from '@material-ui/core/Typography'
import { graphql } from 'gatsby'
import React from 'react'

const ContactPageTemplate = props => {
  const { email, address, phones } = props

  return (
    <>
      <Typography variant="h1" color="initial">
        İletişim
      </Typography>
      <Typography variant="body1" color="initial">
        {address}
      </Typography>
      {phones.map(phone => (
        <Typography key={phone} variant="body2" color="initial">
          {phone}
        </Typography>
      ))}
      {/* MAP */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.8723042609554!2d28.96635861531495!3d40.211903375995085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca16a76cdb5bc9%3A0xd0915549c7420301!2zQmXFn2V2bGVyLCBZxLFsZMSxcsSxbSBDZC4gTm86Mjc0LCAxNjExMCBOaWzDvGZlci9CdXJzYQ!5e0!3m2!1str!2str!4v1613308509883!5m2!1str!2str"
        width="800"
        height="400"
        frameborder="0"
        style={{ border: 0, maxWidth: '100%' }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </>
  )
}

const ContactPage = ({ data }) => {
  const { siteMetadata } = data.site

  return <ContactPageTemplate {...siteMetadata} />
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    site {
      siteMetadata {
        email
        address
        phones
      }
    }
  }
`
