import { Link } from '@components/link'
import { Box } from '@material-ui/core'
import { useCompanyMetadata } from '@hooks/use-company-metadata'
import React from 'react'
import { getIcon } from '../../icons'
import { useStyles } from './styles'

export function Links() {
  const data = useCompanyMetadata()

  return data.links.map(RenderLink)
}
function RenderLink({ icon, children, ...rest }) {
  const classes = useStyles(),
    Icon = getIcon(icon)

  return (
    <Link key={rest.to} className={classes.link} {...rest}>
      <Box display="flex" alignItems="center" justifyContent="space-around">
        {Icon && <Icon className={classes.icon} />}
        {children}
      </Box>
    </Link>
  )
}
