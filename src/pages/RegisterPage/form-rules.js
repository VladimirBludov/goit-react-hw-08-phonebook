export const emailRules = [
  {
    type: "email",
    message: "The input is not valid E-mail!",
  },
  {
    required: true,
    message: "Please input your E-mail!",
  },
];

export const passwordRules = [
  {
    required: true,
    message: "Please input your password!",
  },
];

export const confirmPasswordRules = [
  {
    required: true,
    message: "Please confirm your password!",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }

      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    },
  }),
];

export const nickNameRules = [
  {
    required: true,
    message: "Please input your nickname!",
    whitespace: true,
  },
];
