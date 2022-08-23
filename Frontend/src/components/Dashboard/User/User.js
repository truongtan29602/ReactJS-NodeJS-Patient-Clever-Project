import React from "react";
import { useState, useEffect } from "react";
import "./User.css";
import Avatar from "../../../assets/patient2.png";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import AvatarModal from "./AvatarModal/AvatarModal";
import GeneralModal from "./GeneralModal/GeneralModal";
import SecurityModal from "./SecurityModal/SecurityModal";

const User = () => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const [showAvatar, setShowAvatar] = useState(true);
  const [showGeneral, setShowGeneral] = useState(true);
  const [showSecutiy, setShowSecurity] = useState(true);
  return (
    <div className="user-wrapper">
      <div className="u-title">
        <b>Your profile</b>
      </div>
      <div
        className="u-header-wrapper"
        onClick={() => setShowAvatar(!showAvatar)}
      >
        {showAvatar ? (
          <FontAwesomeIcon className="u-header-icon" icon={faPlus} />
        ) : (
          <FontAwesomeIcon className="u-header-icon" icon={faMinus} />
        )}
        <div className="u-header">Avatar</div>
      </div>
      {showAvatar ? (
        <>
          <div
            className="u-avatar-wrapper"
            onClick={() => setShowAvatarModal((prev) => !prev)}
          >
            <div className="u-a-img-wrapper">
              <img className="u-a-img" src={Avatar} alt="No image" />
              <div className="u-a-img-edit-wrapper">
                <FontAwesomeIcon className="u-a-img-edit" icon={faPencil} />
              </div>
            </div>
          </div>
          <AvatarModal
            showAvatarModal={showAvatarModal}
            setShowAvatarModal={setShowAvatarModal}
          />
        </>
      ) : null}

      <div
        className="u-header-wrapper"
        onClick={() => setShowGeneral(!showGeneral)}
      >
        {showGeneral ? (
          <FontAwesomeIcon className="u-header-icon" icon={faPlus} />
        ) : (
          <FontAwesomeIcon className="u-header-icon" icon={faMinus} />
        )}
        <div className="u-header">General</div>
      </div>
      {showGeneral ? (
        <>
          <div className="u-general-wrapper">
            <div className="u-2-col-wrapper">
              <div className="u-data-wrapper">
                <div className="u-d-text">First name</div>
                <span className="u-d">Adam</span>
              </div>
              <div className="u-data-wrapper">
                <div className="u-d-text">Last name</div>
                <span className="u-d">Curry</span>
              </div>
            </div>
            <div className="u-1-col-wrapper">
              <div className="u-d-text">Address</div>
              <span className="u-d">1368 Hayhurst Lane</span>
            </div>
            <div className="u-2-col-wrapper">
              <div className="u-data-wrapper">
                <div className="u-d-text">City</div>
                <span className="u-d">Mcallen</span>
              </div>
              <div className="u-data-wrapper">
                <div className="u-d-text">State</div>
                <span className="u-d">New York</span>
              </div>
            </div>
          </div>
          <GeneralModal />
        </>
      ) : null}

      <div
        className="u-header-wrapper"
        onClick={() => setShowSecurity(!showSecutiy)}
      >
        {showSecutiy ? (
          <FontAwesomeIcon className="u-header-icon" icon={faPlus} />
        ) : (
          <FontAwesomeIcon className="u-header-icon" icon={faMinus} />
        )}
        <div className="u-header">Security</div>
      </div>
      {showSecutiy ? (
        <>
          <div className="security-wrapper">
            <div className="u-2-col-wrapper">
              <div className="u-data-wrapper">
                <div className="u-d-text">Email</div>
                <span className="u-d">tan2962002@gmail.com</span>
              </div>
              <div className="u-data-wrapper">
                <div className="u-d-text">Contact</div>
                <span className="u-d">0354016898</span>
              </div>
            </div>
            <div className="u-1-col-wrapper">
              <div className="u-d-text">Password</div>
              <input
                className="u-d"
                type="password"
                value="happy1234567890"
                readOnly
              />
            </div>
          </div>
          <SecurityModal />
        </>
      ) : null}
    </div>
  );
};

export default withRouter(User);
