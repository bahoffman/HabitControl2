import React from "react"
// import { Link } from 'gatsby';
import Image from "gatsby-image"
import styled from "styled-components"
import {
  // KitCard,
  // KitHero,
  // KitList,
  KitButton,
  // KitToggleButton,
  // KitToggleButtonGroup,
  // KitDropdown,
  // KitContainer,
  // KitRow,
  // KitCol
} from "../kit"

const Card = styled.div`
  padding: 3rem 3rem;
  text-align: center;
  /* margin: auto; */
`

const ProductCard = ({ title, description, slug, imageData }) => (
  <Card>
    <Image fluid={imageData} alt={title} />
    <h4>{title} </h4>
    <p>{description}</p>
    <KitButton>BUY NOW</KitButton>
  </Card>
)

export default ProductCard
