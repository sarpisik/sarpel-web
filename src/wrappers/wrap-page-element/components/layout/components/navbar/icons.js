import HomeIcon from '@material-ui/icons/Home'
import BusinessIcon from '@material-ui/icons/Business'
import ExploreIcon from '@material-ui/icons/Explore'
import WorkIcon from '@material-ui/icons/Work'

const ICONS = {
  home: HomeIcon,
  business: BusinessIcon,
  explore: ExploreIcon,
  work: WorkIcon
}

export function getIcon(icon) {
  return ICONS[icon]
}
