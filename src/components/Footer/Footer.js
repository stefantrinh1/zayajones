import React from "react";
import Styles from "./Footer.module.scss";

const Footer = () => (
        
  <footer>
    © {new Date().getFullYear()},
    {` `}
    <a href="https://www.zayajones.com">Zayajones.com</a>
  </footer>

)

export default Footer

