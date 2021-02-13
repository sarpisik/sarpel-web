import React from 'react'
import { Layout } from './components'

export default function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
