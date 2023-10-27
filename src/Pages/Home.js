import React from "react";
import "../Styles/Home.css";

import { ReactComponent as Profile } from "../Assets/profile.svg";
import { ReactComponent as Game } from "../Assets/game.svg";
import { ReactComponent as Stats } from "../Assets/stats.svg";
import { ReactComponent as Globe } from "../Assets/globe.svg";
import { ReactComponent as Free } from "../Assets/free.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="call-to-action">
        <div className="cta-title">
          Steam Achievement <span className="styled-words">Tracker</span>
        </div>
        <div className="cta-content">
          The achievement tracker for all your steam achievement needs: Based on{" "}
          <span className="styled-words">YOUR</span> content and tailored for{" "}
          <span className="styled-words">YOUR</span> next hunt
        </div>
        <Link to="/Profile">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
      <div className="widgets">
        <div className="widget">
          <Profile />
          <div className="widget-text">Your profile</div>
        </div>
        <div className="widget">
          <Game />
          <div className="widget-text">Filter by game</div>
        </div>
        <div className="widget">
          <Stats />
          <div className="widget-text">Latest statistics</div>
        </div>
        <div className="widget">
          <Globe />
          <div className="widget-text">Global statistics</div>
        </div>
        <div className="widget">
          <Free />
          <div className="widget-text">Completely free</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
