import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@material-ui/core'
import { Header, Main, Footer, LinearProgress } from './components'

export const Layout = ({ children, location }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    {
      // https://github.com/gatsbyjs/gatsby/issues/13867#issuecomment-534117748
      location.pathname.includes('offline-plugin-app-shell-fallback') ? (
        <LinearProgress />
      ) : (
        <>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </>
      )
    }
  </Box>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
