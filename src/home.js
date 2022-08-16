import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="features">
        <div className="slider">
          <Link to="/features/slider/testimonialslider">
            <h3>Testimonial Slider</h3>
          </Link>
        </div>
      </div>
      <div className="functionalities">
        <Link to="/SongWithSoundWave">
          <h3>SongWithSoundWave</h3>
        </Link>
        <Link to="/creativeImageGallery">
          <h3>creativeImageGallery</h3>
        </Link>
      </div>
    </div>
  );
}
