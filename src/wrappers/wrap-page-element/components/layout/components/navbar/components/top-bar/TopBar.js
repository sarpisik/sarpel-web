import AppBar from '@material-ui/core/AppBar/AppBar'
import Hidden from '@material-ui/core/Hidden/Hidden'
import IconButton from '@material-ui/core/IconButton/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import React from 'react'
import { Links } from '../links'
import { Logo } from '../logo'
import { useStyles } from './styles'

export function TopBar({ className = '', onSidebarOpen }) {
  const classes = useStyles()

  return (
    <AppBar
      className={clsx(classes.root, className)}
      position="sticky"
      color="default"
    >
      <Logo />
      <div className={classes.flexGrow} />
      <Hidden mdDown>
        <Links />
      </Hidden>
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>
      </Hidden>
    </AppBar>
  )
}
