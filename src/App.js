import { Routes, Route } from "react-router-dom";
import "./App.css";
import TestimonialSlider from "./features/slider/testimonialslider/TestimonialSlider";
import CreativeImageGallery from "./functionalities/CreativeImageGallery";
import SongWithSoundWave from "./functionalities/SongWithSoundWave/SongWithSoundWave";
import MobileAnimatedNavigationBar from "./features/navigationbar/MobileAnimatedNavigationBar";
import Home from "./home";
import PhotographyPortfolio from "./websites/PhotographyPortfolio";
import TravelAdvisor from "./websites/TravelAdvisor";
import AdminDashboard from "./websites/AdminDashboard";
import { Ecommerce } from "./websites/AdminDashboard/pages";
import Dashboard from "./websites/Dashboard";
import ChatAssignment from "./websites/ChatAssignment";
import Hundreddayscss from "./Hundreddayscss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/100dayscss" element={<Hundreddayscss />} exact></Route>
        {/* <Route
          path="/websites/photographyportfolio"
          element={<PhotographyPortfolio />}
          exact
        ></Route> */}
        {/* <Route
          path="/websites/traveladvisor"
          element={<TravelAdvisor />}
          exact
        ></Route>
        <Route path="websites/AdminDashboard" element={<AdminDashboard />}>
          <Route path="" element={<Ecommerce />} />
          <Route path="ecommerce" element={<Ecommerce />} />
        </Route> */}
        <Route
          path="/websites/ChatAssignment"
          element={<ChatAssignment />}
          exact
        ></Route>

        {/* <Route
          path="/features/slider/testimonialslider"
          element={<TestimonialSlider />}
          exact
        ></Route>
        <Route path="/websites/dashboard" element={<Dashboard />} exact></Route>
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
        <Route
          path="/MobileAnimatedNavigationBar"
          element={<MobileAnimatedNavigationBar />}
          exact
        ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
