import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductGrid from "./productgrid"

const Product = () => {
  const { allProductsJson } = useStaticQuery(
    graphql`
      query {
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
              mainImage {
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
    `
  )

  return <ProductGrid productDetails={allProductsJson} />
}
export default Product
