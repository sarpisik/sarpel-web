import { Link } from '@components/link'
import { useSiteMetadata } from '@src/hooks/use-site-metadata'
import React from 'react'

export function Links() {
  const data = useSiteMetadata()

  return data.links.map(RenderLink)
}
function RenderLink({ icon, ...rest }) {
  return <Link key={rest.to} {...rest} />
}
