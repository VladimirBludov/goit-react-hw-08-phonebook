import styled from "styled-components";
import { Button, Form, Input } from "antd";

export const FormStyled = styled(Form).attrs({
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
  initialValues: {
    remember: true,
  },
})`
  @media screen and (max-width: 767px) {
    width: 70vw;
    max-width: 350px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 50vw;
  }

  @media screen and (min-width: 1200px) {
    width: 30vw;
  }
`;

export const ItemName = styled(FormStyled.Item).attrs({
  rules: [
    {
      required: true,
      message: "Please input contact name!",
    },
    {
      pattern: new RegExp(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ),
      message: "Wrong format!",
    },
  ],
})``;

export const ItemNumber = styled(FormStyled.Item).attrs({
  rules: [
    {
      required: true,
      message: "Please input contact number!",
    },
    {
      pattern: new RegExp(
        "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
      ),
      message: "Wrong format!",
    },
  ],
})``;

export const InputName = styled(Input).attrs({
  title:
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
})``;

export const InputPhone = styled(Input).attrs({
  title:
    "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
})``;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonStyled = styled(Button)`
  font-size: 16px;
  height: auto;
`;
