import { graphql, useStaticQuery } from 'gatsby'

export const useGlobalMetadata = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query GLOBAL_METADATA_QUERY {
        markdownRemark(frontmatter: { templateKey: { eq: "global" } }) {
          frontmatter {
            title
            description
          }
        }
      }
    `
  )

  return markdownRemark.frontmatter
}
