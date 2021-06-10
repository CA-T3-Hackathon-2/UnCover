import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";
import { Link } from "react-router-dom";

const resultState = {
  loading: true,
  events: null,
  error: null,
};

const eventsReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        loading: false,
        error: null,
        events: action.data,
      };
    case "failure":
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    default:
      return state;
  }
};

const Results = (props) => {
  const { category, dateFrom, dateTo, locationDistance, price } =
    props.formData;
  const { selectedlocation } = props;
  const lat = locationToCoords[selectedlocation.toLowerCase()][0];
  const lng = locationToCoords[selectedlocation.toLowerCase()][1];
  const categoryID = categoryIds[category.split(" ").join("")];

  const [resultsStore, dispatch] = React.useReducer(eventsReducer, resultState);

  const { loading, events, error } = resultsStore;

  React.useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryID,
          lat,
          lng,
          dateFrom,
          dateTo,
          locationDistance,
          price,
        }),
      });
      const responseData = await response.json();
      dispatch({ type: "success", data: responseData.events });
      console.log(responseData);
    } catch (error) {
      dispatch({ type: "failure", data: "Error fetching data from API" });
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section style={{ padding: "5rem" }}>
      <p
        style={{
          alignSelf: "flex-start",
          paddingLeft: "3rem",
          fontSize: "2rem",
        }}
      >
        <ResultItem events={events} />
      </div>
      <div style={{ flex: "0.5", margin: "10px", overflow: "hidden" }}>
        <Map events={events} lat={lat} lng={lng} />
      </div>
    </section>
  );
};

export default Results;
