export default function getLocalMode(isBrowser) {
  const localMode = isBrowser && getStoredMode()

  if (localMode) return localMode

  const deviceModeDark = isBrowser && isDeviceModeDark()

  return deviceModeDark ? 'dark' : 'light'
}

function getStoredMode() {
  return window.localStorage.getItem('mode')
}

function isDeviceModeDark() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}
