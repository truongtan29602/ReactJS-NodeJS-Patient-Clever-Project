import React from "react";
import "./RecentPatients.css";
import Patient1 from "../../../../assets/patient1.png";
import Patient2 from "../../../../assets/patient2.png";

const PatientList = [
  {
    avatar: Patient1,
    date: "21/04/2022",
    name: "Timothy Francis",
    age: 12,
    diagnosis: "Cardiac disease",
    room: 137,
  },
  {
    avatar: Patient2,
    date: "21/04/2022",
    name: "Emery Balor",
    age: 14,
    diagnosis: "Dengue fever",
    room: 259,
  },
];

const RecentPatients = (props) => {
  return (
    <>
      <div className="recent-patients-wrapper">
        <div className="recent-patients-header">Recent patients</div>
        <div className="recent-patients-list-wrapper">
          {PatientList.map((patient, index) => {
            return (
              <div className="recent-patient-wrapper" key={index}>
                <div className="recent-patient-avatar-wrapper">
                  <img className="recent-patient-avatar" src={patient.avatar} />
                </div>
                <div className="recent-patient-date">{patient.date}</div>
                <b className="recent-patient-name">{patient.name}</b>
                <div className="recent-patient-age">{patient.age}</div>
                <div className="recent-patient-diagnosis">{patient.diagnosis}</div>
                <div className="recent-patient-room">Room number {patient.room}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentPatients;
