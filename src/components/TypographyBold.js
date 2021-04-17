import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const TypographyBold = withStyles({
  root: { fontWeight: 'bold' }
})(Typography)

export default TypographyBold
