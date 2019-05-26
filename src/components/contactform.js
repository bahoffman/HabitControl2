import React from "react"

const ContactForm = () => (
  <div>
    <h1>Customer Support</h1>
    <form
      action="https://formaholic.com/f/294979e95c64b4cc"
      method="POST"
      accept-charset="UTF-8"
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required="true"
        />
      </label>
      <label>
        Email address
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required="true"
        />
      </label>
      <label>
        Subject
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          required="true"
        />
      </label>
      <label>
        Your request or query
        <input type="text" name="subject" required="true" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
)

export default ContactForm
