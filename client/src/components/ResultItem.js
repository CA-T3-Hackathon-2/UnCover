import React from "react";

const ResultItem = ({ events }) => {
  console.log(events);
  return (
    <div>
      {events.map((targetEvent) => (
        <div key={targetEvent.id}>
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
