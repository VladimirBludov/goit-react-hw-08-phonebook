import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: cornflowerblue;

  @media screen and (max-width: 1199px) {
    height: 65px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 1199px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  margin-right: 15px;
  padding: 10px;
  border: 1px solid gold;
  border-radius: 8px;
  background-color: rgb(135, 175, 248);
`;

export const LogoImg = styled.img`
  max-width: 150px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 24px;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: white;

  &.active {
    color: gold;
  }

  &:hover {
    color: gold;
  }
`;
