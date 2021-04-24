import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
const ProjectDetails = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <>
      <Seo title={title.toUpperCase()} description={description} />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($slug: String) {
    markdownRemark(
      fileAbsolutePath: { regex: "/(projects)/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        description
        title
      }
    }
  }
`

export default ProjectDetails
