import React from 'react'
import { Helmet as H } from 'react-helmet'

const HTML_ATTRIBUTES = { lang: 'tr' }

export function Helmet() {
  return <H htmlAttributes={HTML_ATTRIBUTES} />
}
