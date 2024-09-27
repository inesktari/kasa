import React from "react";
import Card from "../../components/Card/Card";
import "./Gallery.css";

function Gallery({ accommodations }) {
  return (
    <div className="container">
      <div className="gallery">
        {accommodations.map((accommodation) => (
          <Card key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
