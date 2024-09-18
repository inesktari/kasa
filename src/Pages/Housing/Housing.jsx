import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { fetchProperties } from "../../components/API/API.jsx";
import "./Housing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
      <div className="All-informations-housing">
        <div className="housing-container">
          <Carrousel pictures={accommodation.pictures} />
        </div>

        <div className="Container-Informations-Housing">
          <div className="Title-Town-tags-container">
            <h1 className="Title-Housing">{accommodation.title}</h1>
            <h2 className="Town-Title-Housing">{accommodation.location}</h2>

            <div className="Tag-Housing">
              <div className="Tag-Housing-Unit">
                {accommodation.tags.map((item, index) => (
                  <button key={index}>{item}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="Host-Rating-container">
            <div className="Host">
              <h3 className="Host-Name-Housing">
                {accommodation.host.name.split(" ")[0]}
                <br />
                {accommodation.host.name.split(" ")[1]}
              </h3>
              <img
                src={accommodation.host.picture}
                alt={accommodation.host.name}
              />
            </div>

            <div className="rating">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`star ${
                      ratingValue <= accommodation.rating ? "selected" : ""
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="collapse-bigest-container">
          <div className="Collapse-big-container-Housing">
            <Collapse title="Description" page="Housing">
              {accommodation.description}
            </Collapse>
            <Collapse title="Équipements" page="Housing">
              <ul>
                {accommodation.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    )
  );
}

export default Housing;
