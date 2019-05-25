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
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required="true"
        />
        <label>Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required="true"
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          required="true"
        />
        <label>Your request or query</label>
        <input type="text" name="subject" required="true" />
        <input type="submit" value="Send" />
      </form>
    </div>
  </Layout>
)
