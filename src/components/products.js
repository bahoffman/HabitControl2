import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProductGrid from "./productgrid"

const Product = () => (
  <StaticQuery
    query={graphql`
      query ProductDetailsQuery {
        allProductsJson {
          edges {
            node {
              id
              name
              brand
              category
              sku
              slug
              description
              price
              currency
              MPN
              UPC
              EAN
              condition
              multipack
              is_bundle
              shipping
              tax
              availability
              googleProductCategory
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ProductGrid productDetails={data} />}
  />
)
export default Product
