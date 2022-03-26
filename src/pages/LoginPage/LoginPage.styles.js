import styled from "styled-components";
import { Form, Button } from "antd";

export const FormStyled = styled(Form).attrs({
  name: "login",
  initialValues: {
    remember: true,
  },
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

export const ItemEmail = styled(FormStyled.Item).attrs({
  name: "email",
  rules: [
    {
      required: true,
      message: "Please input your username!",
    },
  ],
})``;

export const ItemPassword = styled(FormStyled.Item).attrs({
  name: "password",
  rules: [
    {
      required: true,
      message: "Please input your password!",
    },
  ],
})``;

export const ButtonStyled = styled(Button).attrs({
  type: "primary",
  htmlType: "submit",
})`
  display: block;
  font-size: 20px;
  height: auto;
  margin: 30px auto 0;
`;
