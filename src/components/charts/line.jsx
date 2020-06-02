import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./style.css";

class Lines extends Component {
  render() {
    const chartData = {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "apples",
          data: [12, 19, 3, 17, 6, 3, 7],
          backgroundColor: "rgba(153,255,51,0.6)",
        },
        {
          label: "oranges",
          data: [2, 29, 5, 5, 2, 3, 10],
          backgroundColor: "rgba(255,153,0,0.6)",
        },
      ],
      maintainAspectRatio: false,
    };
    return (
      <div className="wrapper">
        <Line data={chartData}></Line>
      </div>
    );
  }
}

export default Lines;
