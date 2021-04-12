import AppBar from '@material-ui/core/AppBar/AppBar'
import Switch from '@material-ui/core/Switch/Switch'
import { useDarkMode } from '@plugins/gatsby-plugin-dark-mode/DarkModeProvider'
import React from 'react'
import { Toolbar } from './components'

const SWITCH_INPUT_PROPS = {
  'aria-label': 'Switch between Dark and Light mode'
}

export default function Header() {
  const { mode, handleDarkModeToggle } = useDarkMode()

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <Switch
          color="primary"
          checked={mode === 'dark'}
          onChange={handleDarkModeToggle}
          inputProps={SWITCH_INPUT_PROPS}
        />
      </Toolbar>
    </AppBar>
  )
}
