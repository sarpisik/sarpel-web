import { createMuiTheme } from '@material-ui/core/styles'

import dark from './dark.json'
import light from './light.json'
import shared from './shared.json'

const THEMES = [light, dark].reduce((themes, theme) => {
  const isDark = theme.palette.type === 'light',
    color = isDark ? shared.palette.primary.dark : shared.palette.primary.light,
    backgroundColor = isDark ? '#ffffff' : '#000000',
    dynamicBg = 'rgba(76, 76, 76, 0.3)'

  themes[theme.palette.type] = createMuiTheme({
    palette: { ...theme.palette, ...shared.palette },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            fontSize: '1rem',
            lineHeight: 1.6,
            backgroundColor
          },
          a: {
            textDecoration: 'none',
            color,
            '&:hover': { textDecoration: 'underline' }
          },
          blockquote: {
            margin: '3rem 0',
            padding: '1.5rem',
            borderLeft: `0.25rem solid ${shared.palette.primary.main}`,
            backgroundColor: dynamicBg,
            '& *': { margin: 0 }
          },
          'article blockquote': { margin: 0 },
          'header.MuiAppBar-positionSticky, footer.MuiPaper-root': {
            backgroundColor
          },
          'header.MuiAppBar-positionStatic': { backgroundColor: dynamicBg }
        }
      },
      MuiTypography: {
        colorPrimary: { color }
      },
      MuiCard: { root: { backgroundColor: dynamicBg } }
    },
    custom: { spacing: { big: 6 } }
  })

  return themes
}, {})

export function getThemeByName(themeName) {
  return THEMES[themeName]
}
