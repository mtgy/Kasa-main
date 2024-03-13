import './NavBar.scss'
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/' activeClassName="active">Accueil</NavLink>
      <NavLink to='/a-propos' activeClassName="active">A Propos</NavLink>
    </nav>
  );
};

export default NavBar;
