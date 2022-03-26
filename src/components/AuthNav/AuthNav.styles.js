import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  margin: 0 0 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 24px;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Link = styled(NavLink)`
  color: white;

  &.active {
    color: gold;
  }

  &:hover {
    color: gold;
  }
`;
