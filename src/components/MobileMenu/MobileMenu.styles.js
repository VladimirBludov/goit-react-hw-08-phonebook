import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const MenuStyled = styled(Menu)`
  background-color: cornflowerblue;
  max-width: 340px;

  /* @media screen and (min-width: 330px) and (max-width: 767px) {
    max-width: 310px;
  } */
`;

export const ItemStyled = styled(Menu.Item)`
  color: white;
  font-size: 18px;
`;

export const LinkStyled = styled(NavLink)`
  color: white;

  &.active {
    color: ${({ search }) => (search === "true" ? "white" : "gold")};
  }

  &:hover {
    color: gold;
  }
`;

export const MenuIcon = styled(MenuOutlined)`
  background-color: transparent;
  font-size: 24px;
`;

export const ButtonMenu = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  border: none;
  color: white;
`;
