import React from "react";
import EventHeading from "./styled/results/EventHeading";
import EventLocation from "./styled/results/EventLocation";
import EventDate from "./styled/results/EventDate";

const ResultItem = ({ events }) => {
  // console.log(events);
  return (
    <div>
      {events.map((targetEvent) => (
        <div
          key={targetEvent.id}
          style={{
            padding: "1.5rem",
            boxShadow: "1px 2px 3px 0 rgba(0,0,0,0.2",
          }}
        >
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
          <p style={{ fontSize: "1.4rem" }}>{targetEvent.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultItem;
