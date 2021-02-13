module.exports = {
  siteMetadata: {
    title: 'Sarpel Elektrik',
    description:
      'Sarpel Elektrik "Doğadan Aldığımız Güçle Her Yerdeyiz" sloganıyla yola çıkarak, vizyonu elektrik mühendisliği hizmetlerinin inovatif ve lider kuruluşu olmasıdır'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        indentedSyntax: true
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@plugins': 'plugins',
          '@src': 'src',
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@views': 'src/views'
        },
        extensions: ['js']
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-mui-layout',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
