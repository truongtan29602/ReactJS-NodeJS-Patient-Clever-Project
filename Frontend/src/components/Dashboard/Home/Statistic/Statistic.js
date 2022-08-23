import React from "react";
import "./Statistic.css";
import Chart from "react-apexcharts";

const Statistic = () => {
  const DummyData = {
    options: {
      chart: {
        type: "area"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      dataLabels: {
        enabled: false
      },
    },
    series: [
      {
        name: "Male",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "Female",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ]
  };
  return (
    <>
      <div className="statistic-wrapper">
      <Chart
              options={DummyData.options}
              series={DummyData.series}
              type="area"
              width="1000"
              height="320"
            />
      </div>
    </>
  );
};

export default Statistic;
