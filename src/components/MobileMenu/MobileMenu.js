import { Menu, Dropdown } from "antd";
import { useSelector } from "react-redux";
import { getLoggedIn } from "redux/auth/auth-selectors";
import UserMenu from "components/UserMenu";
import {
  ButtonMenu,
  ItemStyled,
  LinkStyled,
  MenuIcon,
  MenuStyled,
} from "./MobileMenu.styles";
import { useLocation } from "react-router-dom";

export default function MobileMenu() {
  const isLoggedIn = useSelector(getLoggedIn);
  const { pathname } = useLocation();
  const isSearch = pathname === "/contacts/search" ? "true" : "false";

  const menu = (
    <MenuStyled>
      <ItemStyled key="0">
        <LinkStyled to="/">Home</LinkStyled>
      </ItemStyled>
      {isLoggedIn && (
        <>
          <ItemStyled key="1">
            <LinkStyled to="/contacts" search={isSearch}>
              Contacts
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="2">
            <LinkStyled to="/contacts/search">Search</LinkStyled>
          </ItemStyled>
        </>
      )}

      <Menu.Divider />
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <ItemStyled key="3">
            <LinkStyled to="/login">Login</LinkStyled>
          </ItemStyled>
          <ItemStyled key="4">
            <LinkStyled to="/register">Register</LinkStyled>
          </ItemStyled>
        </>
      )}
    </MenuStyled>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
      <ButtonMenu onClick={e => e.preventDefault()}>
        <MenuIcon />
      </ButtonMenu>
    </Dropdown>
  );
}
