import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      sort: { fields: frontmatter___id }
    ) {
      nodes {
        project: frontmatter {
          id
          description
          featured
          github
          slug
          title
          url
          stack {
            id
            title
          }
          image: Image01 {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`
const ProjectsPage = () => {
  const data = useStaticQuery(query)
  const {
    allMarkdownRemark: { nodes: projects },
  } = data
  const projectList = projects.map(item => {
    return item.project
  })

  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projectList} />
        </section>
      </main>
    </>
  )
}

export default ProjectsPage
