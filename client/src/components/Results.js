import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";
import Loading from "./Loading";
import { locationToCoords, categoryIds } from "../utils/helpers";
import { Link } from "react-router-dom";

const resultState = {
  loading: true,
  events: null,
  error: null,
  eventCount: 0,
  page: 1,
  pageCount: 0,
};

const eventsReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        loading: false,
        error: null,
        events: action.data.events,
        eventCount: action.data.count,
        pageCount: action.data.pageCount,
      };
    case "failure":
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case "setPage":
      return {
        ...state,
        page: action.data,
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
  const categoryID = categoryIds[category.split(" ").join("").toLowerCase()];

  const [resultsStore, dispatch] = React.useReducer(eventsReducer, resultState);
  const { loading, events, error, eventCount, page } = resultsStore;

  console.log(resultsStore);

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
      console.log(responseData);

      let pageCount = Math.floor(responseData["@attributes"].count / 10);
      pageCount += pageCount % 10 !== 0 ? 1 : 0;

      dispatch({
        type: "success",
        data: {
          events: responseData.events,
          count: responseData["@attributes"].count,
          pageCount,
        },
      });
    } catch (error) {
      dispatch({ type: "failure", data: "Error fetching data from API" });
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchEvents();
  }, []);

  // Conditional returrns
  if (loading) return <Loading />;

  if (error)
    return <p style={{ marginTop: "10rem", fontSize: "4rem" }}>{error}</p>;

  return (
    <section style={{ padding: " 1rem 3rem" }}>
      <p style={{ marginTop: "3rem", paddingLeft: "5rem", fontSize: "1.8rem" }}>
        <Link to="/find" style={{ color: "inherit", textDecoration: "none" }}>
          Back
        </Link>{" "}
        > Results
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            alignSelf: "flex-start",
            paddingLeft: "5rem",
            paddingRight: "2rem",
            fontSize: "2rem",
            flex: "0.4",
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          <ResultItem events={events} />
          <div></div>
        </div>
        <div style={{ flex: "0.6", margin: "10px", overflow: "hidden" }}>
          <Map events={events} lat={lat} lng={lng} />
        </div>
      </div>
    </section>
  );
};

export default Results;
