import React from "react"
import styled from "styled-components"

//  https://www.sitepoint.com/make-forms-fun-with-flexbox/
const StyledSubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* float: right; */
`
const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  order: 2;
  flex: 1 1 auto;
`
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  order: 2;
  flex: 1;
`

const StyledLabel = styled.label`
  padding: 12px;
  order: 1;
`

const StyledFormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

const ContactForm = () => (
  <StyledFormContainer>
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success-form"
    >
      <fieldset>
        <legend>Contact Us</legend>
        <input type="hidden" name="bot-field" />
        <StyledDiv>
          <StyledInput type="text" name="name" />
          <StyledLabel>Your Name: </StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="email" name="email" />
          <StyledLabel>Your Email: </StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledTextArea name="message" />
          <StyledLabel>Message: </StyledLabel>
        </StyledDiv>
        <StyledSubmitButton type="submit">Send</StyledSubmitButton>
      </fieldset>
    </form>
  </StyledFormContainer>
)

export default ContactForm
