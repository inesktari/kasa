import React, { useState } from "react";
import VectorCarrouselPrev from "../../assets/Vector_Carrousel_Prev.svg";
import VectorCarrouselNext from "../../assets/Vector_Carrousel_Next.svg";
import "./Carrousel.css";

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Gérer l'image précédente
  const handlePrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Gérer l'image suivante
  const handleNext = () => {
    const isLastImage = currentIndex === pictures.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="carrousel">
      <div className="carrousel-inner">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carrousel-image"
        />
      </div>

      {pictures.length > 1 && (
        <div className="carrousel-index">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}

      {pictures.length > 1 && (
        <>
          <button className="carrousel-button prev" onClick={handlePrevious}>
            <img src={VectorCarrouselPrev} alt="Précédent" />
          </button>
          <button className="carrousel-button next" onClick={handleNext}>
            <img src={VectorCarrouselNext} alt="Suivant" />
          </button>
        </>
      )}
    </div>
  );
}

export default Carrousel;
