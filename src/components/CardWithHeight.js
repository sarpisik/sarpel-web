import { Card } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const CardWithHeight = withStyles({
  root: { height: '100%' }
})(Card)

export default CardWithHeight
