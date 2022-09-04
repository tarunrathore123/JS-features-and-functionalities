import React, { useState } from "react";
import "./style.scss";

export default function Index() {
  const [challenge2active, setChallenge2active] = useState(false);
  return (
    <div className="dayscss">
      <div className="day1">
        <h2>Day 1</h2>
        <p>Number With gradient</p>
        <div className="challenge1">
          <div className="background">
            <div className="digits">
              <div className="one"></div>
              <div className="first-zero"></div>
              <div className="second-zero"></div>
            </div>
            <div className="text">DAYS</div>
            <div className="csstext">CSS CHALLENGE</div>
          </div>
        </div>
      </div>

      <div className="day2">
        <h2>Day 2</h2>
        <p>Menu Icon</p>
        <div className="challenge2">
          <div className="background">
            <div
              className={`menu-icon ${challenge2active ? "active" : ""} `}
              onClick={() => {
                setChallenge2active(!challenge2active);
              }}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="day3">
        <h2>Day 3</h2>
        <p>The Pyramide</p>
        <div className="challenge3">
          <div className="frame">
            <div className="center">
              <div className="circle">
                <div className="sky"></div>
                <div className="sun"></div>
                <div className="side-left"></div>
                <div className="side-right"></div>
                <div className="shadow"></div>
                <div className="ground"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="day4">
        <h2>Day 4</h2>
        <p>Loading</p>
        <div className="challenge4">
          <div class="frame">
            <div class="center">
              <div class="dot-1"></div>
              <div class="dot-2"></div>
              <div class="dot-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
