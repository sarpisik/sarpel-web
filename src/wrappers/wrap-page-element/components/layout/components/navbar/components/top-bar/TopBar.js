import PropTypes from 'prop-types'
import { Toolbar } from '@components/toolbar'
import { AppBar, Hidden, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import clsx from 'clsx'
import React from 'react'
import { Links } from '../links'
import { Logo } from '../logo'
import { useStyles } from './styles'

export function TopBar({ className = '', onSidebarOpen }) {
  const classes = useStyles()

  return (
    <AppBar
      className={clsx(classes.root, className, 'header-dynamic')}
      position="sticky"
      color="inherit"
    >
      <Toolbar>
        <Logo />
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Links />
        </Hidden>
        <Hidden lgUp>
          <IconButton
            aria-label="toggle sidebar"
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func.isRequired
}
