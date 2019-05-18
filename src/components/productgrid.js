import React, { Component } from "react"
//import PropTypes from "prop-types"
import styled from "styled-components"
import ProductCard from "../components/productCard"

const AutoGrid = styled.div`
  --auto-grid-min-size: 18rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`

export default class ProductGrid extends Component {
  constructor(props) {
    super(props)
    console.log(`constructor`)
  }

  // static propTypes = {
  //   prodImages: PropTypes.array.isRequired,
  // }

  render() {
    console.log(`rendered`)
    const products = this.props.productDetails.edges
    console.log(products)
    return (
      <AutoGrid>
        {products.map(({ node: product }) => (
          <ProductCard
        // key={`preview-${project.slug}`}
        key={`preview-${product.slug}`}
        title={product.name}
        description={product.description}
        // slug={project.slug}
        // imageData={project.image.childImageSharp.fluid}
        slug={product.slug}
        imageData={product.mainImage.childImageSharp.fluid}
      />
          //<Img fluid={index.node.image.childImageSharp.fluid} />
        ))}
      </AutoGrid>
    )
  }
}
