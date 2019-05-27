exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error("Houston, we have a problem ...")
    return
  }

  results.data.allProductsJson.edges.forEach(edge => {
    const product = edge.node

    createPage({
      path: `/products/${product.slug}/`,
      component: require.resolve("./src/templates/product-graphql.js"),
      context: {
        slug: product.slug,
      },
    })
  })

  results.data.allMarkdownRemark.edges.forEach(edge => {
    const document = edge.node

    createPage({
      path: `/${document.frontmatter.path}/`,
      component: require.resolve("./src/templates/document.js"),
      context: {
        id: document.id,
      },
    })
  })
}
