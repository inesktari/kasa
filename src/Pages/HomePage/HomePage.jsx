import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import { fetchProperties } from "../../components/API/API";
import "./HomePage.css";

function HomePage() {
  const [accommodations, setAccommodations] = useState([]);
  // "useState([])"" est utilisée pour déclarer un état local de "accommodations", initialisé comme un tableau vide.
  // "setAccommodations" est une fonction qui met à jour cet état.

  useEffect(() => {
    //  "useEffect" est utilisée pour récupérer les données des logements dès que le composant est monté.
    // (càd affiché pour la 1ère fois).

    const fetchData = async () => {
      try {
        const accommodationsData = await fetchProperties();
        setAccommodations(accommodationsData);
        // les données récupérées sont stockées dans l'état local "accommodations",
        //  en appelant "setAccommodations".
      } catch (error) {
        console.error("Une erreur est survenue: ", error);
      }
    };

    fetchData();
  }, []);
  // le 2ème argument à useEffect (tableau de dépendances vide []),
  // indique que cet effet doit s'exécuter uniquement lorsque le composant est monté pour la première fois.

  return (
    <div>
      <Banner page="HomePage" />
      <Gallery accommodations={accommodations} />
      {/* "Gallery" reçoit "accommodations" comme prop */}
    </div>
  );
}

export default HomePage;
