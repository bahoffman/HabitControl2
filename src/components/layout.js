/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"

const LayoutGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "content"
    "footer";
`

const StyledContent = styled.main`
  grid-area: content;
  margin-left: 10%;
  max-width: 80%;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutGrid>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledContent>{children}</StyledContent>
        <Footer />
      </LayoutGrid>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
