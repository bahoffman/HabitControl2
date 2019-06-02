import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 1.45rem 1.0875rem;
  color: white;
  background: #777ac4;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  /* display: block; */
  padding: 1em;
  color: white;
`

const StyledA = styled.a`
  text-decoration: none;
  /* display: block; */
  padding: 1em;
  color: white;
`

const Footer = () => (
  <StyledFooter>
    <div style={{ flexGrow: 2 }}>
      <StyledLink to="/privacy-policy/">Privacy Policy</StyledLink>
      <StyledLink to="/terms-of-service/">Terms of Use</StyledLink>
    </div>
    <div>
      <span>© {new Date().getFullYear()}</span>
      <StyledA href="https://bada-bing-llc.business.site/">
        Bada Bing LLC
      </StyledA>
    </div>
  </StyledFooter>
)

export default Footer
