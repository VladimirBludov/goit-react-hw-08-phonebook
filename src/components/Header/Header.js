import { Tooltip, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import AuthNav from "components/AuthNav";
import Container from "components/Container";
import FindContacts from "components/FindContacts";
import MobileMenu from "components/MobileMenu";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getLoggedIn } from "redux/auth/auth-selectors";
import {
  StyledHeader,
  NavList,
  NavItem,
  Nav,
  Logo,
  Wrapper,
  LinkStyled,
  LogoImg,
  MobileWrapper,
} from "./Header.styles";
import logoPath from "./logo.png";

export default function Header() {
  const isLoggedIn = useSelector(getLoggedIn);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isContactsPage =
    pathname === "/contacts" || pathname === "/contacts/search";

  const isSearch = pathname === "/contacts/search";

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Nav>
            <Logo>
              <Link to="/">
                <LogoImg src={logoPath} alt="Logo" />
              </Link>
            </Logo>
            <NavList>
              <NavItem>
                <LinkStyled to="/">Home</LinkStyled>
              </NavItem>
              {isLoggedIn && (
                <NavItem>
                  <LinkStyled to="/contacts">Contacts</LinkStyled>
                </NavItem>
              )}
            </NavList>
          </Nav>
          {isContactsPage && (
            <div style={{ margin: "0 auto" }}>
              <FindContacts />
            </div>
          )}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Wrapper>
        <MobileWrapper>
          {!isSearch && (
            <Logo>
              <Link to="/">
                <LogoImg src={logoPath} alt="Logo" />
              </Link>
            </Logo>
          )}
          {isSearch && (
            <>
              <Tooltip title="search">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ArrowLeftOutlined />}
                  onClick={() => navigate(-1)}
                />
              </Tooltip>
              <div style={{ margin: "0 auto" }}>
                <FindContacts />
              </div>
            </>
          )}
          <MobileMenu />
        </MobileWrapper>
      </Container>
    </StyledHeader>
  );
}
