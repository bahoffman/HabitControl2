import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FormSuccessPage = () => (
  <Layout>
    <SEO title="Form Success Page" description="Form Success Page" />
    <h1 style={{ textAlign: "center" }}>Form Submitted!</h1>
    <p>Your meessage has been sent. Thank you.</p>
    <Link to="/">Return to the homepage</Link>
  </Layout>
)

export default FormSuccessPage
