import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";
import Loading from "./Loading";
import PageBox from "./PageBox";
import { locationToCoords, categoryIds } from "../utils/helpers";
import { Link } from "react-router-dom";

const resultState = {
  loading: true,
  events: null,
  error: null,
  eventCount: 0,
  currentPage: 1,
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
        currentPage: action.data,
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
  const { loading, events, error, eventCount, currentPage, pageCount } =
    resultsStore;

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

      // Work out page counts for pagination
      let pageCount = Math.floor(responseData["@attributes"].count / 10);
      if (responseData["@attributes"].count % 10 !== 0) pageCount += 1;

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

  // Set up pageNumArray to map over
  const pageNumArray = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumArray.push(i);
  }

  return (
    <section style={{ padding: " 1rem 3rem", height: "75vh" }}>
      <p style={{ marginTop: "2rem", paddingLeft: "5rem", fontSize: "1.8rem" }}>
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
        </div>
        <div style={{ flex: "0.6", margin: "10px", overflow: "hidden" }}>
          <Map events={events} lat={lat} lng={lng} />
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: "6rem" }}
      >
        {pageNumArray.map((page, i) => {
          return <PageBox key={i} page={page} currentPage={currentPage} />;
        })}
      </div>
    </section>
  );
};

export default Results;
