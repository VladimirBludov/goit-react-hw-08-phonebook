import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "redux/auth/authApi";
import { getUserName } from "redux/auth/auth-selectors";
import {
  ContainerMenu,
  StyledAvatar,
  StyledButton,
  Text,
} from "./UserMenu.styles";

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const [logout, { isLoading }] = useLogoutMutation();

  return (
    <ContainerMenu>
      <StyledAvatar icon={<UserOutlined />} />
      <Text>Welcome, {userName}</Text>
      <StyledButton
        type="default"
        icon={<PoweroffOutlined />}
        loading={isLoading}
        onClick={() => logout()}
      >
        Logout
      </StyledButton>
    </ContainerMenu>
  );
}
