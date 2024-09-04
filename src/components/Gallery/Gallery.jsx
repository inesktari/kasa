import React from "react";
import Card from "../../components/Card/Card";
import "./Gallery.css";

function Gallery({ accommodations }) {
  // "Gallery" reçoit la prop "accommodations",
  // sous forme d'un tableau d'objets représentant les logements.
  return (
    <div className="container">
      <div className="gallery">
        {accommodations.map((accommodation) => (
          // "map" est utilisée pour itérer sur chaque élément du tableau "accommodations" ,
          // et créer une "Card" pour chaque logement.
          <Card key={accommodation.id} accommodation={accommodation} />
          // 1) "key" est une prop essentielle pour React lorsqu'on génère des listes d'éléments,
          // afin d'identifier quels éléments ont changé, été ajoutés ou supprimés.
          // 2) Le logement complet est passé comme prop au composant Card.
        ))}
      </div>
    </div>
  );
}

export default Gallery;
