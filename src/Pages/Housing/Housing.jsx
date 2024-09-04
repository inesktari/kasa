import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { fetchProperties } from "../../components/API/API.jsx";
import "./Housing.css";

function Housing() {
  const { id } = useParams();
  // "useParams" est utilisée pour récupérer l'id du logement
  // depuis l'URL
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // "useEffect" permet de déclencher une requête API
    // pour récupérer les logements, puis chercher celui
    // qui correspond à l'id concerné.
    const fetchData = async () => {
      try {
        const accommodationsData = await fetchProperties();
        const foundAccommodation = accommodationsData.find(
          (item) => item.id === id
        );
        if (foundAccommodation) {
          setAccommodation(foundAccommodation);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Une erreur est survenue:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <Navigate replace to="/*" />;
  }

  return (
    accommodation && (
      <div>
        <Carrousel />

        <h1>{accommodation.title}</h1>
        <h3>{accommodation.location}</h3>

        <div>{accommodation.tags}</div>

        <div>
          <h3>{accommodation.host.name}</h3>
          <img src={accommodation.host.picture} alt={accommodation.host.name} />
        </div>

        <div>Rating</div>

        <div>
          <Collapse title="Description"></Collapse>
          <Collapse title="Équipements"></Collapse>
        </div>
      </div>
    )
  );
}

export default Housing;
