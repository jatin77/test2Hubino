import React from "react";
import Bars from "../charts/bar";
import Lines from "../charts/line";
import "./graphs.styles.css";

function Graphs() {
  return (
    <div className="graphs">
      <div>
        <Bars />
      </div>
      <div>
        <Lines />
      </div>
    </div>
  );
}

export default Graphs;
