import { Link } from "react-router-dom";
import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="features">
        <h2>Features</h2>
        <div className="slider">
          <Link to="/features/slider/testimonialslider">
            <h3>Testimonial Slider</h3>
          </Link>
        </div>
      </div>
      <div className="functionalities">
        <h2>Functionalities</h2>

        <Link to="/SongWithSoundWave">
          <h3>SongWithSoundWave</h3>
        </Link>
        <Link to="/creativeImageGallery">
          <h3>creativeImageGallery</h3>
        </Link>
        <Link to="/MobileAnimatedNavigationBar">
          <h3>MobileAnimatedNavigationBar</h3>
        </Link>
      </div>
      <div className="functionalities">
        <h2>Websites</h2>

        <Link to="/websites/PhotographyPortfolio">
          <h3>PhotographyPortfolio</h3>
        </Link>
      </div>
    </div>
  );
}
