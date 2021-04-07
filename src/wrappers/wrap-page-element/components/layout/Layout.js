import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer, Header, LinearProgress, Navbar } from './components'
import { useStyles } from './styles'

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
            <main className={useStyles().content}>{children}</main>
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
