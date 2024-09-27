import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ accommodation }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/housing/${accommodation.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={accommodation.cover} alt={accommodation.title} />
      <h2>{accommodation.title}</h2>
    </div>
  );
}

export default Card;
