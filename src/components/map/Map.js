import { Section, SectionCardContainer } from '@components/section'
import React from 'react'

const FRAME_STYLE = {
  border: 0,
  maxWidth: '100%',
  display: 'block',
  margin: 'auto'
}

export function Map(props) {
  return (
    <Section {...props}>
      <SectionCardContainer sm={10} md={8}>
        {/* MAP */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.8723042609554!2d28.96635861531495!3d40.211903375995085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca16a76cdb5bc9%3A0xd0915549c7420301!2zQmXFn2V2bGVyLCBZxLFsZMSxcsSxbSBDZC4gTm86Mjc0LCAxNjExMCBOaWzDvGZlci9CdXJzYQ!5e0!3m2!1str!2str!4v1613308509883!5m2!1str!2str"
          width="800"
          height="400"
          frameBorder="0"
          style={FRAME_STYLE}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="google map"
        ></iframe>
      </SectionCardContainer>
    </Section>
  )
}
