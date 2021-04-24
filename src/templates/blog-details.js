import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import Seo from "../components/Seo"

const BlogDetails = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  const { rawMarkdownBody } = data.markdownRemark

  console.log(data)
  return (
    <>
      <Seo title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown children={rawMarkdownBody} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query getSingleBlog($slug: String) {
    markdownRemark(
      fileAbsolutePath: { regex: "/(blogs)/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        description
        title
      }
      rawMarkdownBody
    }
  }
`

export default BlogDetails
