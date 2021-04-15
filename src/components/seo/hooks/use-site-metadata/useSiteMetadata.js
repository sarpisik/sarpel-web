import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
    file,
    markdownRemark
  } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        markdownRemark(frontmatter: { templateKey: { eq: "company" } }) {
          frontmatter {
            email
            address
            phones {
              phone
            }
          }
        }
        file(name: { eq: "logo" }) {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    `
  )

  return {
    siteMetadata,
    logo: file.childImageSharp.original.src,
    ...markdownRemark.frontmatter
  }
}
