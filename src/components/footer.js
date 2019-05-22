import React from "react"

const Footer = () => (
  <footer style={{ gridArea: "`footer`" }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
