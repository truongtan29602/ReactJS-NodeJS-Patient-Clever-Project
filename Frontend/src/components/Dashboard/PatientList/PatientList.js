import React from "react";
import { useState, useEffect } from "react";
import "./PatientList.css";
import StickyHeadTable from "./Table/Table";
import data from "./data";
import Preview from "./Preview/Preview";
import Patient2 from "../../../assets/patient2.png";

const PatientList = () => {
  const [previewProfile, setPreviewProfile] = useState({
    patient_id: "100001",
    room: "A801",
    profile_image: Patient2,
    name: "Adam Muffins",
    gender: "male",
    appointment: "18/01/2022",
    blood_group: "A",
    genotype: "AA",
    mail: "adam1801@gmail.com",
    phone_number: "0338918023",
    DoB: "17/04/1974",
    address: "3130 Euclid Ave #306 Lynwood, California(CA)",
    health_history: "diabete",
  });
  return (
    <div className="patient-list-container">
      <div className="patient-list-wrapper">
        <div className="p-l-table-wrapper">
          <StickyHeadTable
            className="p-l-table"
            data={data}
            previewProfile={previewProfile}
            setPreviewProfile={setPreviewProfile}
          />
        </div>
      </div>
      <div className="preview-container">
        <Preview previewProfile={previewProfile} />
      </div>
    </div>
  );
};

export default PatientList;
