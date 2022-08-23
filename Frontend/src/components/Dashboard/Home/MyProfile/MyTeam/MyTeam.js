import React from "react";
import "./MyTeam.css";

import Nurse1 from "../../../../../assets/patient1.png"
import Nurse2 from "../../../../../assets/patient2.png"

const members=[
    {
      avatar: Nurse1,
      name: "Jayson Stanley",
      position: "Certified Nursing Assistant"
    },
    {
      avatar: Nurse2,
      name: "Jayson Stanley",
      position: "Certified Nursing Assistant"
    },
    {
      avatar: Nurse1,
      name: "Jayson Stanley",
      position: "Certified Nursing Assistant"
    },
    {
      avatar: Nurse2,
      name: "Jayson Stanley",
      position: "Certified Nursing Assistant"
    },
    {
      avatar: Nurse1,
      name: "Jayson Stanley",
      position: "Certified Nursing Assistant"
    },
    {
      avatar: Nurse2,
      name: "Jayson Stanley",
      position: "Certified Nursing Assistant"
    }
  ]

const MyTeam = () => {
  return (
    <div className="my-team-wrapper">
      <div className="my-team-header">My health care team</div>
      <div className="m-t-members-wrapper">
        {members.map((member, index) => {
          return (
            <div className="member-wrapper" key={index}>
              <img className="member-profile-image" src={member.avatar} />
              <div className="member-info-wrapper">
                <div className="member-name">{member.name}</div>
                <div className="member-position">{member.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTeam;
