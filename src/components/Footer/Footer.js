import React from "react";
import Styles from "./Footer.module.scss";
import Logo from '../../images/Logos/logo.png';

const Footer = () => (
  <footer className={Styles.footer}>
    <div className={Styles.logo}>
      <img src={Logo} alt="Z"/>
    </div>
    <div className={Styles.copyright}>
      © {new Date().getFullYear()},{` `}
      <a href="https://www.zayajones.com">Zayajones.com</a>
    </div>
  </footer>
)

export default Footer
