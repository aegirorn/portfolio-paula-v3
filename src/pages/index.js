import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const query = graphql`
  {
    projectList: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(projects)/" }
        frontmatter: { featured: { eq: true } }
      }
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
const IndexPage = () => {
  const data = useStaticQuery(query)
  const {
    projectList: { nodes: projects },
  } = data
  const projectList = projects.map(item => {
    return item.project
  })

  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" showLink projects={projectList} />
      </main>
    </>
  )
}

export default IndexPage
