import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  useLocation,
  useHistory,
  withRouter,
} from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendar,
  faUser,
  faEnvelope,
  faClipboardList,
  faSignOutAlt,
} from "@fortawesome/fontawesome-free-solid";

const DEFAULT_PATH = "/dashboard/home";

const NavBar = (props) => {
  const { match, history } = props;
  const location = useLocation();
  const [currentScreen, setCurrentScreen] = useState(
     location.pathname || DEFAULT_PATH
  );

  useEffect(() => {
    setCurrentScreen(location.pathname);
  }, [location]);
  useEffect(() => {}, [currentScreen]);
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-logo-wrapper">
          <img
            className="navbar-logo"
            src={Logo}
            onClick={() => {
              history.push("/dashboard/home");
            }}
          />
        </div>
        <div className="icons-wrapper">
          <div
            className={`${
              currentScreen === "/dashboard/home" ? "selected-wrapper" : ""
            }`}
          >
            <FontAwesomeIcon
              className={`icon ${
                currentScreen === "/dashboard/home" ? "selected" : ""
              }`}
              icon={faHome}
              onClick={() => {
                history.push("/dashboard/home");
              }}
            />
          </div>
          <div
            className={`${
              currentScreen === "/dashboard/schedule" ? "selected-wrapper" : ""
            }`}
          >
            <FontAwesomeIcon
              className={`icon ${
                currentScreen === "/dashboard/schedule" ? "selected" : ""
              }`}
              icon={faCalendar}
              onClick={() => {
                history.push("/dashboard/schedule");
              }}
            />
          </div>
          <div
            className={`${
              currentScreen === "/dashboard/profile/" ? "selected-wrapper" : ""
            }`}
          >
            <FontAwesomeIcon
              className={`icon ${
                currentScreen === "/dashboard/profile/" ? "selected" : ""
              }`}
              icon={faUser}
              onClick={() => {
                history.push("/dashboard/profile/");
              }}
            />
          </div>
          
          <div
            className={`${
              currentScreen === "/dashboard/patients" ? "selected-wrapper" : ""
            }`}
          >
            <FontAwesomeIcon
              className={`icon ${
                currentScreen === "/dashboard/patients" ? "selected" : ""
              }`}
              icon={faClipboardList}
              onClick={() => {
                history.push("/dashboard/patients");
              }}
            />
          </div>
        </div>
        <FontAwesomeIcon
          className="sign-out-icon"
          icon={faSignOutAlt}
          onClick={() => {
            history.push("/login");
          }}
        />
      </div>
    </>
  );
};

export default withRouter(NavBar);
