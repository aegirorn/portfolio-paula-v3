import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../../components/Seo"

const BlogTemplate = ({ pageContext: { frontmatter__slug }, data }) => {
  const { title, description } = data.blog.blogObject
  const content = data.blog.content
  return (
    <>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown children={content} />
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
  query getSingleBlog($frontmatter__slug: String) {
    blog: markdownRemark(
      fileAbsolutePath: { regex: "/(blogs)/" }
      frontmatter: { slug: { eq: $frontmatter__slug } }
    ) {
      blogObject: frontmatter {
        title
        description
      }
      content: rawMarkdownBody
    }
  }
`
export default BlogTemplate
