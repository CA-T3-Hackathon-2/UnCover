import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";

const Results = (props) => {
  console.log(props);


  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: "0.5",
          padding: "10px",
          overflowY: "scroll",
          height: "80vh",
        }}
      >
        <ResultItem />
      </div>
      <div style={{ flex: "0.5", margin: "10px", overflow: "hidden" }}>
        <Map />
      </div>
    </div>
  );
};

export default Results;
