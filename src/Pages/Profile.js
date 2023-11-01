import React, { useRef, useState } from "react";
import "../Styles/Profile.css";
import config from "../config.js";
import FormInput from "../Components/FormInput";
import ProfileView from "../Components/ProfileView";
import GameView from "../Components/GameView";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [game, setGames] = useState(null);
  const [userID, setUserID] = useState(null);
  const inputRef = useRef(null);

  const getProfile = () => {
    const input = inputRef.current.value.trim();
    var query = "";
    const steamIDPattern = /^[0-9/]+$/;

    if (input.includes("https://")) {
      input.replace("https://steamcommunity.com/profiles/");
      query = `ISteamUser/GetPlayerSummaries/v0002/?key=${config.STEAM_API_KEY}&steamids=${input}`;
    } else if (steamIDPattern.test(input)) {
      query = `ISteamUser/GetPlayerSummaries/v0002/?key=${config.STEAM_API_KEY}&steamids=${input}`;
    } else {
      query = `ISteamUser/ResolveVanityURL/v0001/?key=${config.STEAM_API_KEY}&vanityurl=${input}`;
    }

    setUserID(input);

    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.response.players);
      })
      .catch((err) => {
        console.log(err.message);
      });

    fetch(
      `IPlayerService/GetOwnedGames/v0001/?key=${config.STEAM_API_KEY}&steamid=${input}&format=json&include_appinfo=true`
    )
      .then((response) => response.json())
      .then((data) => {
        data.response.games.sort(
          (a, b) => b.playtime_forever - a.playtime_forever
        );

        setGames(data.response.games);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="page">
      <div className="search-group">
        <div className="search-title">
          Search for profile: <span>[URL or Steam Name]</span>
        </div>
        <div className="search">
          <div className="search-text">URL or Name:</div>
          <FormInput refer={inputRef} placeholder="Steam ID or Name" />
          <button className="submit-profile" onClick={getProfile}>
            Search
          </button>
          <div className="profiles-group">
            {profile &&
              profile.map((player) => {
                return (
                  <ProfileView
                    profilePicture={player.avatar}
                    personaName={player.personaname}
                    countryCode={player.loccountrycode}
                    userID={player.steamid}
                    key={player.userID}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="games">
        {game && (
          <div className="games-grid">
            {game.map((games) => (
              <GameView
                gameName={games.name}
                gamePicture={games.img_icon_url}
                timePlayed={(games.playtime_forever / 60).toFixed(1)}
                appID={games.appid}
                user={userID}
                key={games.appid}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
