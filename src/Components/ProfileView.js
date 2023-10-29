import React from "react";
import "../Styles/ProfileView.css";

function ProfileView(props) {
  return (
    <div className="main">
      <div className="content">
        <img
          src={props.profilePicture}
          alt="Steam profile"
          className="profile-picture"
        />
        <div className="info">
          <h3>{props.personaName}</h3>
          <p>
            {props.countryCode} | {props.userID}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
