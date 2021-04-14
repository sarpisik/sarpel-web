import CMS from 'netlify-cms-app'

import { tr } from 'netlify-cms-locales'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerLocale('tr', tr)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('kurumsal', AboutPagePreview)
CMS.registerPreviewTemplate('proje', ProjectPreview)
