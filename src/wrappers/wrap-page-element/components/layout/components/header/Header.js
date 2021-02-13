import React from "react"

import { AppBar, Switch } from "@material-ui/core"

import { Logo, Toolbar } from "./components"

import { useDarkMode } from "@plugins/gatsby-plugin-dark-mode/DarkModeProvider"

const SWITCH_INPUT_PROPS = {
  "aria-label": "Switch between Dark and Light mode",
}

export default function Header() {
  const { mode, handleDarkModeToggle } = useDarkMode()

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Logo theme={mode} />
        <Switch
          color="primary"
          checked={mode === "dark"}
          onChange={handleDarkModeToggle}
          inputProps={SWITCH_INPUT_PROPS}
        />
      </Toolbar>
    </AppBar>
  )
}
