import PropTypes from 'prop-types'
import React from 'react'
import {
  Footer,
  Header,
  Helmet,
  LinearProgress,
  Main,
  Navbar,
  Wrapper
} from './components'

export function Layout({ children, location }) {
  return (
    <>
      <Helmet />
      <Wrapper>
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
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.shape({
      includes: PropTypes.func
    })
  }).isRequired
}
