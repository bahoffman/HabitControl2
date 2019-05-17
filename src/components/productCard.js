import React from 'react';
// import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components'

const Card = styled.div`
  padding: 3rem 3rem;
  text-align: center;
  /* margin: auto; */
`

const BuyNowButton = styled.button`
    background: #1a1a1a;
    color: #fff;
    padding: 6px 30px 1px;
    text-transform: uppercase;
    border-radius: 30px;
    /* font-size: .9rem; */
    opacity: 1;
    /* -webkit-transition: all .5s ease; */
    transition: all .5s ease;
`

const ProductCard = ({ title, description, slug, imageData }) => (
  <Card>
      <Image fluid={imageData} alt={title} />
    <h4>{title}
    </h4>
    <p>{description}</p>

    <BuyNowButton>BUY NOW</BuyNowButton>
  </Card>
);

export default ProductCard;
