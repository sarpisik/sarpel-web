import { Box } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import { Footer, Header, LinearProgress, Navbar } from './components'
import { useStyles } from './styles'

export const Layout = ({ children, location }) => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {
        // https://github.com/gatsbyjs/gatsby/issues/13867#issuecomment-534117748
        location.pathname.includes('offline-plugin-app-shell-fallback') ? (
          <LinearProgress />
        ) : (
          <div
            className={clsx({
              [classes.root]: true
            })}
          >
            <Header />
            <Navbar />
            <main className={classes.content}>{children}</main>
            <Footer />
          </div>
        )
      }
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
