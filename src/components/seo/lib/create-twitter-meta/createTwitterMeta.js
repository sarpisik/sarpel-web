import { createOgMeta } from '../shared'

export function createTwitterMeta(siteUrl, title, description, logoUrl) {
  return [
    createOgMeta(createProperty('card'), 'summary'),
    createOgMeta(createProperty('url'), siteUrl),
    createOgMeta(createProperty('title'), title),
    createOgMeta(createProperty('description'), description),
    createOgMeta(createProperty('image'), logoUrl)
  ]
}

function createProperty(property) {
  return `twitter:${property}`
}
