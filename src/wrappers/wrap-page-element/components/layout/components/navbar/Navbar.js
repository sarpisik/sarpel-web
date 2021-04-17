import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { Sidebar, TopBar } from './components'

export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false),
    theme = useTheme(),
    isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
      defaultMatches: true
    }),
    shouldOpenSidebar = isDesktop ? false : openSidebar,
    handleSidebarOpen = () => {
      setOpenSidebar(true)
    },
    handleSidebarClose = () => {
      setOpenSidebar(false)
    }

  return (
    <>
      <TopBar onSidebarOpen={handleSidebarOpen} />
      <Sidebar onClose={handleSidebarClose} open={shouldOpenSidebar} />
    </>
  )
}
