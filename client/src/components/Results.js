import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";
import { categoryIds, locationToCoords } from "../utils/helpers";

const Results = (props) => {
  const {category, dateFrom, dateTo, locationDistance, price} = props.formData
  const {selectedlocation} = props
  const lat = locationToCoords[selectedlocation.toLowerCase()][0]
  const lng = locationToCoords[selectedlocation.toLowerCase()][1]
  const categoryID = categoryIds[category.split(' ').join('')]


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
