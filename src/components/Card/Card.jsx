import React from "react";
import "./Card.css";

function Card({ accommodation }) {
  // Card reçoit le prop "accommodation", qui représente un logement avec toutes ses propriétés.
  return (
    <div className="card">
      <img src={accommodation.cover} alt={accommodation.title} />
      <h2>{accommodation.title}</h2>
    </div>
  );
}

export default Card;
