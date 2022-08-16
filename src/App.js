import { Routes, Route } from "react-router-dom";
import "./App.css";
import TestimonialSlider from "./features/slider/testimonialslider/TestimonialSlider";
import CreativeImageGallery from "./functionalities/CreativeImageGallery";
import SongWithSoundWave from "./functionalities/SongWithSoundWave/SongWithSoundWave";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route
          path="/features/slider/testimonialslider"
          element={<TestimonialSlider />}
          exact
        ></Route>
        <Route
          path="/SongWithSoundWave"
          element={<SongWithSoundWave />}
          exact
        ></Route>
        <Route
          path="/creativeImageGallery"
          element={<CreativeImageGallery />}
          exact
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
