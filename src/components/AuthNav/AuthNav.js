import React from 'react';
import { Link, NavItem, NavList } from './AuthNav.styles';

export default function AuthNav() {
  return (
    <NavList>
      <NavItem>
        <Link to="/login">Login</Link>
      </NavItem>
      <NavItem>
        <Link to="/register">Register</Link>
      </NavItem>
    </NavList>
  );
}
