import { createOgMeta } from '../shared'

export function createFbMeta(siteUrl, title, logoUrl, description) {
  return [
    createOgMeta(createProperty('type'), 'website'),
    createOgMeta(createProperty('url'), siteUrl),
    createOgMeta(createProperty('title'), title),
    createOgMeta(createProperty('image'), logoUrl),
    createOgMeta(createProperty('image:width'), 600),
    createOgMeta(createProperty('image:heigth'), 600),
    createOgMeta(createProperty('description'), description)
  ]
}

function createProperty(property) {
  return `og:${property}`
}
