import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "../styles/map.css";

const Map = ({ events, lat, lng }) => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    zoom: 13,
  });

  console.log(lat, lng);

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const listener = (event) => {
      if (event.key === "Escape") {
        setSelectedEvent(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="60vw"
        height="80vh"
        onViewportChange={(newView) => {
          setViewport(newView);
        }}
        mapStyle={"mapbox://styles/darkoau/ckpqa00xl0l9117myclc4ss8k"}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        {events.map((targetEvent) => (
          <Marker
            key={targetEvent.id}
            latitude={targetEvent.point.lat}
            longitude={targetEvent.point.lng}
            className="marker"
          >
            <button
              className="markerBtn"
              onClick={(event) => {
                event.preventDefault();
                setSelectedEvent(targetEvent);
              }}
            >
              <img
                src="assets/pin.png"
                alt="event-display"
                className="markerBtnImg"
              />
            </button>
          </Marker>
        ))}
        {selectedEvent ? (
          <Popup
            latitude={selectedEvent.point.lat}
            longitude={selectedEvent.point.lng}
            onClose={() => (setTimeout(() => setSelectedEvent(null)), 300)}
            className="popup"
          >
            <div className="popup-div">
              <h3>{selectedEvent.name}</h3>
              <br></br>
              <h5>{selectedEvent.location_summary}</h5>
              <h6>{selectedEvent.address}</h6>
              <br></br>
              <p>{selectedEvent.description}</p>
              <h6>
                <b>Valid until: {selectedEvent.datetime_end}</b>
              </h6>
              <br></br>
              <a
                href={selectedEvent.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Go to event
              </a>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;
