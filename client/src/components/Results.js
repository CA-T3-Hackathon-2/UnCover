import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";
import { Link } from "react-router-dom";

const Results = (props) => {
  console.log(props);

  return (
    <section style={{ padding: "5rem" }}>
      <p
        style={{
          alignSelf: "flex-start",
          paddingLeft: "3rem",
          fontSize: "2rem",
        }}
      >
        <Link to="/find" style={{ textDecoration: "none", color: "inherit" }}>
          Back
        </Link>{" "}
        > Results
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "0.4",
            padding: "3rem",
            overflowY: "scroll",
            height: "80vh",
            marginRight: "3rem",
          }}
        >
          <ResultItem />
        </div>
        <div style={{ flex: "0.6", margin: "10px", overflow: "hidden" }}>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Results;
