import React from "react";
import * as eventData from "../eventData.json";

const ResultItem = () => {
  return (
    <div>
      {eventData.events.map((targetEvent) => (
        <div>
          <h5>
            <a href={targetEvent.url} rel="noopener noreferrer" target="_blank">
              {targetEvent.name}
            </a>
          </h5>
          <p>{targetEvent.description}</p>
          <h6>{targetEvent.location_summary}</h6>
        </div>
      ))}
    </div>
  );
};

export default ResultItem;
