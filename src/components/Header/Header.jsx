import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/LOGO.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <NavLink to="/">
          <img src={LOGO} alt="Logo Kasa" className="header_logo" />
        </NavLink>
      </div>

      <nav className="header_menu">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeClassName="active">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// !!!!!!!!!!!! tester la suppression de la balise header dans la function header !!!!!!!!!!
