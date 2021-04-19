import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { Sidebar, TopBar } from './components'
import { MEDIA_QUERY_OPTIONS } from './contants'
import { setBreakpoint, toggleBool } from './helpers'

export function Navbar() {
  const [openSidebar, toggleSidebar] = React.useReducer(toggleBool, false),
    isDesktop = useMediaQuery(setBreakpoint, MEDIA_QUERY_OPTIONS),
    shouldOpenSidebar = isDesktop ? false : openSidebar

  return (
    <>
      <TopBar onSidebarOpen={toggleSidebar} />
      <Sidebar onClose={toggleSidebar} open={shouldOpenSidebar} />
    </>
  )
}
