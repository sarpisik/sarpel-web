const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const TEMPLATE_KEYS_TO_EXCLUDE = ['global', 'company']

exports.onCreateBabelConfig = ({ actions }) => {
  // https://material-ui.com/guides/minimizing-bundle-size/
  actions.setBabelPlugin({
    name: 'babel-plugin-transform-imports',
    options: {
      '@material-ui/core': {
        transform: '@material-ui/core/esm/${member}',
        preventFullImport: true
      },
      '@material-ui/icons': {
        // Use "transform: '@material-ui/icons/${member}'," if your bundler does not support ES modules
        transform: '@material-ui/icons/esm/${member}',
        preventFullImport: true
      }
    }
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges.filter(
      edge =>
        !TEMPLATE_KEYS_TO_EXCLUDE.includes(edge.node.frontmatter.templateKey)
    )

    pages.forEach(edge => {
      const node = edge.node,
        frontmatter = node.frontmatter

      createPage({
        path: node.fields.slug,
        tags: frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: { id: node.id }
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    pages.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: { tag }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`)
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode })
    })
}
