import React from "react";
import "../Styles/Profile.css";
import FormInput from "../Components/FormInput";

function Profile() {
  return (
    <div className="page">
      <div className="search-group">
        <div className="search-title">
          Search for profile: <span>[URL or Steam Name]</span>
        </div>
        <div className="search">
          <div className="search-text">URL or Name:</div>
          <FormInput placeholder="URL or Name" />
        </div>
      </div>
      <div className="profiles-group"></div>
    </div>
  );
}

export default Profile;
