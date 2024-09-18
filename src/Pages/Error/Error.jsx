import React from "react";
import { Link } from "react-router-dom";
import Error_404 from "../../assets/Error_404.svg";
import "./Error.css";

function Error() {
  return (
    <div className="Error_container">
      <img src={Error_404} alt="Erreur 404" className="logo_404" />
      <h4 className="Error_text">
        Oups! La page que <br />
        vous demandez n'existe pas.
      </h4>
      <Link to="/" className="Error_return_HomePage">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
