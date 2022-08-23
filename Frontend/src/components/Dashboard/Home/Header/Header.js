import React from "react";
import "./Header.css";
import SearchBar from "../../../Common/SearchBar/SearchBar";

const Header = (props) => {
  return (
    <>
      <div className="header-wrapper">
        <div className="greeting-wrapper">
          <b>Hello, Dr.Curry</b>
          <p>Have a nice day at work and stay healthy!</p>
        </div>
        <div className="subheader-wrapper">
          <SearchBar/>
        </div>
      </div>
    </>
  );
};

export default Header;
