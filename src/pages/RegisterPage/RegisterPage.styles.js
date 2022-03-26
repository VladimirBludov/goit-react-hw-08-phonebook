import styled from "styled-components";
import { Button, Form } from "antd";

export const FormStyled = styled(Form).attrs({
  name: "register",
  scrollToFirstError: true,
  size: "large",
  layout: "vertical",
})`
  margin: 30px auto 0;
  padding: 5px;

  @media screen and (max-width: 767px) {
    width: 70vw;
    max-width: 350px;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

export const ButtonStyled = styled(Button).attrs({
  type: "primary",
  htmlType: "submit",
})`
  display: block;
  font-size: 20px;
  height: auto;
  margin: 30px auto 0;
`;
