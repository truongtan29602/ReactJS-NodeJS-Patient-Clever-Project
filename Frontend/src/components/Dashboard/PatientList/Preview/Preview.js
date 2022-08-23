import React from "react";
import "./Preview.css";
const Preview = (props) => {
  return (
    <div className="preview-wrapper">
      <div className="preview-basic-info-wrapper">
        <img
          className="preview-avatar"
          src={props.previewProfile.profile_image}
          alt=""
        />
        <div className="preview-basic-info-content">
          <div className="preview-patient-id">
            <b>Patient ID: </b>
            {props.previewProfile.patient_id}
          </div>
          <div className="preview-room">
            <b>Room: </b>
            {props.previewProfile.room}
          </div>
          <hr />
          <div className="preview-name">
            <b>Fullname: </b>
            {props.previewProfile.name}
          </div>
          <div className="preview-gender">
            <b>Gender: </b>
            {props.previewProfile.gender}
          </div>
          <div className="preview-DoB">
            <b>Date of Birth: </b>
            {props.previewProfile.DoB}
          </div>
        </div>
      </div>
      <div className="preview-subheader">Contact Info</div>
      <div className="preview-contact-info-wrapper">
        <div className="preview-contact">
          <b>Contact: </b>
          {props.previewProfile.phone_number}
        </div>
        <div className="preview-email">
          <b>Email: </b>
          {props.previewProfile.mail}
        </div>
        <div className="preview-address">
          <b>Address: </b>
          {props.previewProfile.address}
        </div>
      </div>
      <div className="preview-subheader">Medical Info</div>
      <div className="preview-medical-info-wrapper">
        <div className="preview-blood-group">
          <b>Blood type: </b>
          {props.previewProfile.blood_group}
        </div>
        <div className="preview-genotype">
          <b>Genotype: </b>
          {props.previewProfile.genotype}
        </div>
        <div className="preview-health-history">
          <b>Health record: </b>
          {props.previewProfile.health_history}
        </div>
        <div className="preview-note">
          <b>Notes</b>
        </div>
        <textarea className="preview-note-textarea"></textarea>
      </div>
    </div>
  );
};

export default Preview;
