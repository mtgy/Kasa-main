import React from "react";
import Logo from '@partials/Logo';
import "./footer.scss";

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <Logo />
      <p>©{thisYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
