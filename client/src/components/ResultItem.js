import React from "react";
import EventHeading from "./styled/results/EventHeading";
import EventLocation from "./styled/results/EventLocation";
import EventDate from "./styled/results/EventDate";

const ResultItem = ({ events }) => {
  console.log(events);
  return (
    <div>
      {events.map((targetEvent) => (
        <div style={{ padding: "1rem 0" }}>
          <EventHeading
            href={targetEvent.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {targetEvent.name}
          </EventHeading>
          <EventLocation>{targetEvent.location_summary}</EventLocation>
          <EventDate>
            {new Date(targetEvent.datetime_start).toLocaleString()} to{" "}
            {new Date(targetEvent.datetime_end).toLocaleString()}
          </EventDate>
          <p>{targetEvent.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultItem;
