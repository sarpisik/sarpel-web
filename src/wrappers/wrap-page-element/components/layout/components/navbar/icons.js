import {
  Home as HomeIcon,
  Business as BusinessIcon,
  Explore as ExploreIcon,
  Work as WorkIcon
} from '@material-ui/icons'

const ICONS = {
  home: HomeIcon,
  business: BusinessIcon,
  explore: ExploreIcon,
  work: WorkIcon
}

export function getIcon(icon) {
  return ICONS[icon]
}
