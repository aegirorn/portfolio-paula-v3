import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext: { frontmatter__title }, data }) => {
  console.log(data.project.projectObject)

  const projectTitle = data.project.projectObject.title
  const projectDescription = data.project.projectObject.description
  return (
    <>
      <Seo
        title={projectTitle.toUpperCase()}
        description={projectDescription}
      />
      <main className="project-template-page">
        <h2>{projectTitle}</h2>
        <p>{projectDescription}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($frontmatter__title: String) {
    project: markdownRemark(
      fileAbsolutePath: { regex: "/(projects)/" }
      frontmatter: { title: { eq: $frontmatter__title } }
    ) {
      projectObject: frontmatter {
        description
        title
        id
      }
    }
  }
`

export default ProjectTemplate
