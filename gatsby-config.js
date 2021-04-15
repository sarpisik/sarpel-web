const NAME = 'Sarpel Elektrik'

module.exports = {
  siteMetadata: {
    title: NAME,
    description:
      'Sarpel Elektrik "Doğadan Aldığımız Güçle Her Yerdeyiz" sloganıyla yola çıkarak, vizyonu elektrik mühendisliği hizmetlerinin inovatif ve lider kuruluşu olmasıdır',
    siteUrl: process.env.SITE_URL || 'http://localhost:8000'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@hooks': 'src/hooks',
          '@img': 'src/img',
          '@pages': 'src/pages',
          '@plugins': 'plugins',
          '@src': 'src',
          '@templates': 'src/templates',
          '@views': 'src/views',
          '@wrappers': 'src/wrappers'
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
        path: `${__dirname}/src/meta-datas`,
        name: 'meta-datas'
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
    `gatsby-plugin-image`,
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
              withWebp: true,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800
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
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://maps.gstatic.com/']
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            disallow: ['/admin'],
            allow: '/'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: { exclude: ['/admin'] }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: NAME,
        short_name: NAME,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/img/logos/logo.png'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
