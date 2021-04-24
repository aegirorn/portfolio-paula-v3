const path = require(`path`)

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query Templates {
      allProjects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      allBlogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blogs)/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve(`./src/templates/project-details.js`)
  const blogTemplate = path.resolve(`./src/templates/blog-details.js`)

  result.data.allProjects.nodes.forEach(node => {
    createPage({
      component: projectTemplate,
      path: `/projects/` + node.frontmatter.slug,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  result.data.allBlogs.nodes.forEach(node => {
    createPage({
      component: blogTemplate,
      path: `/blogs/` + node.frontmatter.slug,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
