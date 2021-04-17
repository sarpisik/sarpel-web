import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer, Header, LinearProgress, Main, Navbar } from './components'

export const Layout = ({ children, location }) => (
  <>
    <Helmet htmlAttributes={{ lang: 'tr' }} />
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {
        // https://github.com/gatsbyjs/gatsby/issues/13867#issuecomment-534117748
        location.pathname.includes('offline-plugin-app-shell-fallback') ? (
          <LinearProgress />
        ) : (
          <>
            <Header />
            <Navbar />
            <Main>{children}</Main>
            <Footer />
          </>
        )
      }
    </Box>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
