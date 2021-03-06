import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const TypographyCapitalized = withStyles({
  root: { textTransform: 'capitalize' }
})(Typography)

export default TypographyCapitalized
