import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/fontawesome-free-solid";
import Avatar from "../../../assets/patient2.png"
const SearchBar = () => {
  return (
    <>
      <div className="search-wrapper">
        <input className="search-bar" placeholder="Patient info" />
        <button className="search-button">
          <FontAwesomeIcon
            className="search-icon"
            icon={faSearch}
          ></FontAwesomeIcon>
        </button>
  
        <img className="avatar" src={Avatar}/>
        <div className="sub-text">Dr.Curry</div>
        <div className="notification-icon-wrapper">
          <FontAwesomeIcon
            className="notification-icon"
            icon={faBell}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
