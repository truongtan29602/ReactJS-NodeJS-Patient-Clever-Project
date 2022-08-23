import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/logo.png";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="head-footer">
          <img className="footer-logo" src={Logo} />
          <div className="footer-email-wrapper">
          <FontAwesomeIcon className="footer-email-icon" icon={faEnvelope}></FontAwesomeIcon>
          <input
            type="text"
            className="email-subcribe-text-box"
            placeholder="Leave your email here"
          />
          </div>
        </div>
        <div className="foooter-detail-wrapper">
          <div className="footer-detail">
            <div className="footer-detail-header">Explore</div>
            <div className="footer-detail-item-wrapper">Home</div>
           
          </div>
          <div className="footer-detail">
            <div className="footer-detail-header">New User</div>
            <div className="footer-detail-item-wrapper">Create an account</div>
          </div>
          <div className="footer-detail">
            <div className="footer-detail-header">Visit</div>
            <div className="footer-detail-item-wrapper">
              <FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt} />
              <span className="footer-item-text">
                264 Nguyen Dinh Chieu, district 3, Ho Chi Minh city
              </span>
            </div>
          </div>
          <div className="footer-detail">
            <div className="footer-detail-header">Legals</div>
            <div className="footer-detail-item-wrapper">Terms of use</div>
            <div className="footer-detail-item-wrapper">Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
