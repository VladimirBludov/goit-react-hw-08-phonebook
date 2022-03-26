import { Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import Container from "components/Container";
import {
  ButtonStyled,
  FormStyled,
  ItemEmail,
  ItemPassword,
} from "./LoginPage.styles";
import { useLoginMutation } from "redux/auth/authApi";
import Section from "components/Section";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const [form] = FormStyled.useForm();

  const onFinish = values => {
    const credentials = {
      email: values.email,
      password: values.password,
    };

    login(credentials)
      .unwrap()
      .then(() => form.resetFields())
      .catch(() => {
        toast.error("You entered the wrong email or password!");
        form.resetFields();
      });
  };

  return (
    <Section title="Login page">
      <Container>
        <FormStyled onFinish={onFinish} form={form}>
          <ItemEmail label={<span style={{ fontSize: "18px" }}>Email</span>}>
            <Input />
          </ItemEmail>

          <ItemPassword
            label={<span style={{ fontSize: "18px" }}>Password</span>}
          >
            <Input.Password />
          </ItemPassword>

          <ButtonStyled icon={<LoginOutlined />} loading={isLoading}>
            Login
          </ButtonStyled>
        </FormStyled>
      </Container>
    </Section>
  );
}
