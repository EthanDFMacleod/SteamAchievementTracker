import { Link } from "react-router-dom";
import React from "react";
import "../Styles/GameView.css";

function GameView(props) {
  return (
    <Link
      className="main-game"
      to={`/Game?gameid=${props.appID}&user=${props.user}`}
    >
      <div className="content-game">
        <img
          src={`http://media.steampowered.com/steamcommunity/public/images/apps/${props.appID}/${props.gamePicture}.jpg`}
          alt="Game icon"
          className="game-picture"
        />
        <div className="info-game">
          <h3 className="game-title">{props.gameName}</h3>
          <p className="game-info">
            {props.timePlayed}hrs | ID: {props.appID}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default GameView;
