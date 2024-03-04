import "./Header.scss";
import React from "react";
import Logo from '@partials/Logo';
import NavBar from "@layout/navBar/NavBar";

const Header = () => {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;