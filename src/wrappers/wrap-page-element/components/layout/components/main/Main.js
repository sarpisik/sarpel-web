import React from "react"
import PropTypes from "prop-types"

import { Box } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const StyledBox = withStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10, 0),
    display: "flex",
    flexDirection: "column",
  },
}))(Box)

export default function Main({ children }) {
  return <StyledBox component="main">{children}</StyledBox>
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}
