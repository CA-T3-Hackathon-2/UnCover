import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import Submit from "./styled/Submit";
import "../styles/map.css";
import "mapbox-gl/dist/mapbox-gl.css";

// prettier-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = ({ events, lat, lng }) => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    zoom: 13,
  });

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
        mapStyle="mapbox://styles/rhys-morris/ckpqt4iel13v317q2faz5scmp"
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
              <h5>{selectedEvent.location_summary}</h5>
              <h6>{selectedEvent.address}</h6>
              {selectedEvent.images.images[0]["original_url"] && (
                <img
                  src={selectedEvent.images.images[0]["original_url"]}
                  style={{ width: "100%", height: "auto", margin: "1rem 0" }}
                  alt="event-image"
                />
              )}
              <p style={{ fontSize: "1.4rem" }}>{selectedEvent.description}</p>
              <h6>
                <b>Valid until: {selectedEvent.datetime_end}</b>
              </h6>
              <a
                href={selectedEvent.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Submit style={{ marginTop: ".5rem", padding: ".5rem" }}>
                  GO TO EVENT
                </Submit>
              </a>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;
