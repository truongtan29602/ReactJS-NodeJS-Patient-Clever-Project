import React from "react";
import "./KeyMetrics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPhone,
  faClipboardList,
  faHospital,
} from "@fortawesome/fontawesome-free-solid";

const metrics = [
  {
    icon: faBed,
    description: "Total Patients",
    total: "1,521",
  },
  {
    icon: faPhone,
    description: "Consultations",
    total: "307",
  },
  {
    icon: faClipboardList,
    description: "Staff",
    total: "771",
  },
  {
    icon: faHospital,
    description: "Rooms",
    total: "2,150",
  },
];

const KeyMetrics = (props) => {
  return (
    <div className="key-metrics-wrapper">
      {metrics.map((metric, index) => {
        return (
          <div className="key-metric-wrapper" key={index}>
            <div className="key-metric-icon-wrapper">
              <FontAwesomeIcon className="key-metric-icon" icon={metric.icon} />
            </div>
            <div className="key-metric-description">{metric.description}</div>

            <b className="key-metric-total">{metric.total}</b>
          </div>
        );
      })}
    </div>
  );
};

export default KeyMetrics;
