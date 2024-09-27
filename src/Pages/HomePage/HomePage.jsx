import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import { fetchProperties } from "../../components/API/API";
import "./HomePage.css";

function HomePage() {
  const [accommodations, setAccommodations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accommodationsData = await fetchProperties();
        setAccommodations(accommodationsData);
      } catch (error) {
        console.error("Une erreur est survenue: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner page="HomePage" />
      <Gallery accommodations={accommodations} />
    </div>
  );
}

export default HomePage;
