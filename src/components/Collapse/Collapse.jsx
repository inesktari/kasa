import React, { useState } from "react";
import Vector_Collapse from "../../assets/Vector_Collapse.svg";
import "./Collapse.css";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const CollapseClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <button
        onClick={CollapseClick}
        className={`collapse-button ${isOpen ? "active" : ""}`}
      >
        {title}
        <img
          src={Vector_Collapse}
          alt="Chevron"
          className={`collapse-icon ${isOpen ? "open" : ""}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
