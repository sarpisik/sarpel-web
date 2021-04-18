export function createGoogleMeta(name, description, image) {
  return [
    createMeta('description', description),
    createMeta('name', name),
    createMeta('image', image)
  ]
}

function createMeta(ItemProp, content) {
  return { ItemProp, content }
}
