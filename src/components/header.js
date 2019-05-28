import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  grid-area: header;
  background: #777ac4;
  margin-bottom: 1.45rem;
`

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  /* display: block; */
  padding: 1em;
  color: white;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledNav>
      <h1 style={{ margin: 0, flexGrow: 2 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <StyledLink to="/about/">About</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
      <StyledLink to="/faq/">FAQ</StyledLink>
      <StyledLink to="/">Shop</StyledLink>
    </StyledNav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
