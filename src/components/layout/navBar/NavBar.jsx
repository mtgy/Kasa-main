import './NavBar.scss'
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
         <Link to='/'>Accueil</Link>
         <Link to='/a-propos'>A Propos</Link>
        </nav>
    );
};

export default NavBar;