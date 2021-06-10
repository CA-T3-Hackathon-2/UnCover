import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { categoryIds, locationToCoords } from "../utils/helpers";
>>>>>>> 305c60f2a604cbbc60528a7e3ea85628e238059e

const Results = (props) => {
  const {category, dateFrom, dateTo, locationDistance, price} = props.formData
  const {selectedlocation} = props
  const lat = locationToCoords[selectedlocation.toLowerCase()][0]
  const lng = locationToCoords[selectedlocation.toLowerCase()][1]
  const categoryID = categoryIds[category.split(' ').join('')]

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
