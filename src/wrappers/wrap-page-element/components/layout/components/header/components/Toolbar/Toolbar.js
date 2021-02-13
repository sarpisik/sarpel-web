import React from "react"
import { Toolbar as MuiToolbar } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const StyledToolbar = withStyles({
  root: { justifyContent: "space-between" },
})(MuiToolbar)

export default function Toolbar(props) {
  return <StyledToolbar {...props} />
}
