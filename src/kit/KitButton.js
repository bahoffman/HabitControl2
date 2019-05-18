import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import styled from "styled-components"

export const KitToggleButton = ToggleButton
export const KitToggleButtonGroup = ToggleButtonGroup

export const KitButton = styled(Button)`
  background: #1a1a1a;
  color: #fff;
  padding: 6px 30px 1px;
  text-transform: uppercase;
  border-radius: 30px;
  /* font-size: .9rem; */
  opacity: 1;
  /* -webkit-transition: all .5s ease; */
  transition: all 0.5s ease;
`
// const BuyNowButton = styled.button`
//   background: #1a1a1a;
//   color: #fff;
//   padding: 6px 30px 1px;
//   text-transform: uppercase;
//   border-radius: 30px;
//   /* font-size: .9rem; */
//   opacity: 1;
//   /* -webkit-transition: all .5s ease; */
//   transition: all 0.5s ease;
// `
