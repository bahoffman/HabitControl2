import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  /* display: block; */
  padding: 1em;
  color: white;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#777AC4`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      style={{
        display: `flex`,
        flexFlow: `row wrap`,
        justifyContent: `flex-end`,
        alignItems: `center`,
        listStyle: `none`,
        margin: 0,
        // margin: `auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, flexGrow: 2 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <StyledLink to="/about/">About</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
      <StyledLink to="/faq/">FAQ</StyledLink>
      <StyledLink to="/">Shop</StyledLink>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
