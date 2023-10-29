import React, { useRef, useState } from "react";
import "../Styles/Profile.css";
import FormInput from "../Components/FormInput";
import ProfileView from "../Components/ProfileView";
import config from "../config.js";

function Profile() {
  const [profile, setProfile] = useState(null);
  const inputRef = useRef(null);

  const getProfile = () => {
    const steamID = inputRef.current.value;

    fetch(
      `ISteamUser/GetPlayerSummaries/v0002/?key=${config.STEAM_API_KEY}&steamids=${steamID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.response.players);
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
        </div>
      </div>
      <div className="profiles-group">
        {profile &&
          profile.map((player) => {
            return (
              <ProfileView
                profilePicture={player.avatar}
                personaName={player.personaname}
                countryCode={player.loccountrycode}
                userID={player.steamid}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Profile;
