import React from "react"

const ContactForm = () => (
  <div>
    <h1>Customer Support</h1>
    <form
      action=" https://formsubmit.co/9b8578472d58431730eb4f01d291d499 "
      method="POST"
      accept-charset="UTF-8"
    >
      <input
        type="hidden"
        name="_next"
        value="https://yourdomain.co/thanks.html"
      />
      <input type="hidden" name="_subject" value="New submission!" />
      <input type="text" name="_honey" style={{ display: "none" }} />
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
        <input type="text" name="info" required="true" />
      </label>
      <input type="submit" value="Send" />
      {/* <button type="submit">Submit</button> */}
    </form>
  </div>
)

export default ContactForm
