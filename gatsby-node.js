/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const siteTemplate = path.resolve(`src/templates/site.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  query TopSitesQuery {
    allContentChefTopSite {
      edges {
        node {
          publicId
          payload {
            description
            image
            title
            url
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allContentChefTopSite.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/sites/${edge.node.publicId}`,
        component: siteTemplate,
        context: {
            title: edge.node.payload.title,
            image: edge.node.payload.image,
            url: edge.node.payload.url,
            description: edge.node.payload.description,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}