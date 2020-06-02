import React from "react";
import { Bar } from "react-chartjs-2";
import "./style.css";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

var densityData = {
  label: "Density of Planet (kg/m3)",
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: "rgba(142, 45, 226, 0.8)",
  borderWidth: 0,
  yAxisID: "y-axis-density",
};

var gravityData = {
  label: "Gravity of Planet (m/s2)",
  data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
  backgroundColor: "rgba(255, 75, 53, 0.8)",
  borderWidth: 0,
  yAxisID: "y-axis-gravity",
};

var planetData = {
  labels: [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ],
  datasets: [densityData, gravityData],
};

var chartOptions = {
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        categoryPercentage: 0.6,
      },
    ],
    yAxes: [
      {
        id: "y-axis-density",
      },
      {
        id: "y-axis-gravity",
      },
    ],
  },
  maintainAspectRatio: false,
};

const Bars = () => {
  return (
    <div className="wrapper">
      <Bar data={planetData} options={chartOptions} />
    </div>
  );
};

export default Bars;
