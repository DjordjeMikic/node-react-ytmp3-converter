import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer, LinksContainer } from './style';

const Nav = () => (
  <NavContainer className="flex">
    <h1>Youtube to mp3 Converter</h1>
    <LinksContainer className="flex">
      <NavLink to="/" exact activeClassName="active" className="flex">Home</NavLink>
      <NavLink to="/about" activeClassName="active" className="flex">About</NavLink>
    </LinksContainer>
  </NavContainer>
);

export default Nav;
