import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Products />

    {/* <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
