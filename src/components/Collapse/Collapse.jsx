import React, { useState } from "react";
import Vector_Collapse from "../../assets/Vector_Collapse.svg";
import "./Collapse.css";

function Collapse({ title, children, page }) {
  const [isOpen, setIsOpen] = useState(false);

  const CollapseClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`collapse-container ${
        page === "Housing"
          ? "collapse-container-Housing"
          : "collapse-container-About"
      }`}
    >
      <button
        onClick={CollapseClick}
        className={`collapse-button ${isOpen ? "active" : ""} ${
          page === "Housing"
            ? "collapse-button-width-Housing"
            : "collapse-button-width-About"
        }`}
      >
        {title}
        <img
          src={Vector_Collapse}
          alt="Chevron"
          className={`collapse-icon ${isOpen ? "open" : ""}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        <div className="collapse-text">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
