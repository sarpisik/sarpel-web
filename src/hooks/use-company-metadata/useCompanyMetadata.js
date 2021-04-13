import { graphql, useStaticQuery } from 'gatsby'

export const useCompanyMetadata = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query COMPANY_METADATA_QUERY {
        markdownRemark(frontmatter: { templateKey: { eq: "company" } }) {
          frontmatter {
            links {
              children
              icon
              to
            }
            email
            address
            phones {
              phone
            }
          }
        }
      }
    `
  )

  return markdownRemark.frontmatter
}
