import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <h1>Customer Support</h1>
      <form
        action="https://formaholic.com/f/294979e95c64b4cc"
        method="POST"
        accept-charset="UTF-8"
      >
        <input type="text" name="name" required="true" />
        <input type="email" name="email" required="true" />
        <input type="submit" value="Send" />
      </form>
    </div>
  </Layout>
)
