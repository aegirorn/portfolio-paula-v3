import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/Seo"
import Blogs from "../components/Blogs"

const query = graphql`
  {
    blogList: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blogs)/" } }
      sort: { fields: frontmatter___id }
    ) {
      nodes {
        blogs: frontmatter {
          id
          date
          slug
          title
        }
        content: html
      }
      totalCount
    }
  }
`
const Blog = () => {
  const data = useStaticQuery(query)
  const {
    blogList: { nodes: blogs },
  } = data
  const blogList = blogs.map(item => {
    return item.blogs
  })

  return (
    <>
      <Seo title="Blog" />
      <main>
        <section className="blog-page">
          <Blogs blogs={blogList} title="blog" />
        </section>
      </main>
    </>
  )
}
export default Blog
