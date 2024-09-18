import React from "react";
import LOGO_white from "../../assets/LOGO_white.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <img src={LOGO_white} alt="Logo Kasa en blanc" className="footer_logo" />
      <p className="footer_text">
        © 2020 Kasa. All <br />
        rights reserved
      </p>
    </footer>
  );
}

export default Footer;
