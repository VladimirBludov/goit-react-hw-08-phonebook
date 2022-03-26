import { Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import {
  confirmPasswordRules,
  emailRules,
  nickNameRules,
  passwordRules,
} from "./form-rules";
import { ButtonStyled, FormStyled } from "./RegisterPage.styles";
import { useRegisterMutation } from "redux/auth/authApi";
import Section from "components/Section";
import Container from "components/Container";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [register, { isLoading }] = useRegisterMutation();
  const [form] = FormStyled.useForm();

  const onFinish = values => {
    const credentials = {
      name: values.nickname,
      email: values.email,
      password: values.password,
    };

    register(credentials)
      .unwrap()
      .then(() => form.resetFields())
      .catch(() => {
        toast.error("User with this email address already exists!");
        form.resetFields();
      });
  };

  return (
    <Section title="Register page">
      <Container>
        <FormStyled form={form} onFinish={onFinish}>
          <FormStyled.Item
            name="email"
            rules={emailRules}
            label={<span style={{ fontSize: "18px" }}>Email</span>}
          >
            <Input />
          </FormStyled.Item>

          <FormStyled.Item
            name="password"
            rules={passwordRules}
            hasFeedback
            label={<span style={{ fontSize: "18px" }}>Password</span>}
          >
            <Input.Password />
          </FormStyled.Item>

          <FormStyled.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={confirmPasswordRules}
            label={<span style={{ fontSize: "18px" }}>Confirm Password</span>}
          >
            <Input.Password />
          </FormStyled.Item>

          <FormStyled.Item
            name="nickname"
            tooltip="What do you want others to call you?"
            rules={nickNameRules}
            label={<span style={{ fontSize: "18px" }}>Nickname</span>}
          >
            <Input />
          </FormStyled.Item>
          <ButtonStyled icon={<LoginOutlined />} loading={isLoading}>
            Register
          </ButtonStyled>
        </FormStyled>
      </Container>
    </Section>
  );
}
