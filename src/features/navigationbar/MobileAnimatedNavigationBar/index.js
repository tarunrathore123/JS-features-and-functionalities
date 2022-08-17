import "./style.scss";
import heart from "./heart.svg";
import home from "./home.svg";
import profile from "./profile.svg";
import search from "./search.svg";
import { useState } from "react";

export default function Index() {
  const [active, setActive] = useState(1);
  return (
    <div className="mobilenavigationbar">
      <div className="overlay">
        <div
          className={`iconwithname ${active == 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          <img src={home} />
          <p>Home</p>
        </div>
        <div
          className={`iconwithname ${active == 2 ? "active" : ""}`}
          onClick={() => setActive(2)}
        >
          <img src={heart} />
          <p>Likes</p>
        </div>
        <div
          className={`iconwithname ${active == 3 ? "active" : ""}`}
          onClick={() => setActive(3)}
        >
          <img src={search} />
          <p>Search</p>
        </div>
        <div
          className={`iconwithname ${active == 4 ? "active" : ""}`}
          onClick={() => setActive(4)}
        >
          <img src={profile} />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}
