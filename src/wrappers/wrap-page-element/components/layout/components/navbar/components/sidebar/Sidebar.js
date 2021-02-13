import { Link } from '@components/link'
import { useSiteMetadata } from '@hooks/use-site-metadata'
import Button from '@material-ui/core/Button/Button'
import Drawer from '@material-ui/core/Drawer/Drawer'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import clsx from 'clsx'
import React from 'react'
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
    data = useSiteMetadata()

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
          {data.links.map(function Link(link) {
            const {
              to,
              //  icon: Icon,
              children
            } = link

            return (
              <ListItem className={classes.item} disableGutters key={children}>
                <Button
                  activeClassName={classes.active}
                  className={classes.button}
                  component={CustomRouterLink}
                  to={to}
                >
                  {/* <div className={classes.icon}>
                              <Icon />
                          </div> */}
                  {children}
                </Button>
              </ListItem>
            )
          })}
        </List>
      </div>
    </Drawer>
  )
}
