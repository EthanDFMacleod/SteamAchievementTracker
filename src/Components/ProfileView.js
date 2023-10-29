import React from "react";
import "../Styles/ProfileView.css";

function ProfileView(props) {
  return (
    <div className="main-profile">
      <div className="content-profile">
        <img
          src={props.profilePicture}
          alt="Steam profile"
          className="profile-picture"
        />
        <div className="info-profile">
          <div className="profile-title">{props.personaName}</div>
          <div className="profile-info">
            {props.countryCode} | {props.userID}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
