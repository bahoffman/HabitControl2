/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

// const AutoGrid = styled.div`
// display: grid;
//   grid-template-areas:
//     "header header header"
//     "nav content side"
//     "footer footer footer";

//   grid-template-columns: 200px 1fr 200px;
//   grid-template-rows: auto 1fr auto;
//   grid-gap: 10px;

//   height: 100vh;
// `

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
      <div
        style={{
          display: `grid`,
          gridTemplateAreas: "'header' 'content' 'footer'",
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            gridArea: `content`,
            margin: `0 auto`,
            // maxWidth: 960,
            maxWidth: `80%`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
