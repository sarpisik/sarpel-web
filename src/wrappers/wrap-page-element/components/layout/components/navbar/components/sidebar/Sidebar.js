import { Link } from '@components/link'
import { useCompanyMetadata } from '@hooks/use-company-metadata'
import { useGlobalMetadata } from '@hooks/use-global-metadata'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button/Button'
import Drawer from '@material-ui/core/Drawer/Drawer'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import { globalHistory } from '@reach/router'
import clsx from 'clsx'
import React from 'react'
import { Icons } from '../../../Icons'
import { getIcon } from '../../icons'
import { Logo } from '../logo'
import { useStyles } from './styles'

const CustomRouterLink = React.forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <Link {...props} />
  </div>
))
CustomRouterLink.displayName = 'CustomRouterLink'

export function Sidebar(props) {
  const { open, onClose, className, ...rest } = props,
    classes = useStyles(),
    { links } = useCompanyMetadata(),
    { email } = useGlobalMetadata()

  React.useEffect(
    function handleSideBarOnRouteChanged() {
      return globalHistory.listen(({ action }) => {
        if (open && action === 'PUSH') onClose()
      })
    },
    [open]
  )

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <List className={classes.nav}>
          {links.map(function Link(link) {
            const { to, icon, children } = link,
              Icon = getIcon(icon)

            return (
              <ListItem className={classes.item} disableGutters key={children}>
                <Button
                  activeClassName={classes.active}
                  className={classes.button}
                  component={CustomRouterLink}
                  to={to}
                >
                  {Icon && (
                    <div className={classes.icon}>
                      <Icon />
                    </div>
                  )}
                  {children}
                </Button>
              </ListItem>
            )
          })}
        </List>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Logo />
          <Icons email={email} />
        </Box>
      </div>
    </Drawer>
  )
}
