import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`
const StyledLabel = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
`
const StyledFormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`

const ContactForm = () => (
  <StyledFormContainer>
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
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          placeholder="Enter name"
          required="true"
        />
      </StyledLabel>
      <StyledLabel>
        Email address
        <StyledInput
          type="email"
          name="email"
          placeholder="Enter email"
          required="true"
        />
      </StyledLabel>
      <StyledLabel>
        Subject
        <StyledInput
          type="text"
          name="subject"
          placeholder="Enter Subject"
          required="true"
        />
      </StyledLabel>
      <StyledLabel>
        Your request or query
        <StyledInput type="text" name="info" required="true" />
      </StyledLabel>
      <input type="submit" value="Send" />
      {/* <button type="submit">Submit</button> */}
    </form>
  </StyledFormContainer>
)

export default ContactForm
