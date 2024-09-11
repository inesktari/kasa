import React from "react";
import HomePageBanner from "../../assets/Banner_HomePage.svg";
import AboutBanner from "../../assets/Banner_About.svg";
import "./Banner.css";

function Banner({ page }) {
  const bannerImage = page === "HomePage" ? HomePageBanner : AboutBanner;
  const overlayClass =
    page === "HomePage" ? "homepage-overlay" : "about-overlay";

  return (
    <div className="banner">
      <img src={bannerImage} alt={`Bannière de la page ${page}`} />
      <div className={`banner-overlay ${overlayClass}`}></div>
      {page === "HomePage" && (
        <div className="banner-text">
          <p>
            Chez vous,
            <br /> partout et ailleurs
          </p>
        </div>
      )}
    </div>
  );
}

export default Banner;
