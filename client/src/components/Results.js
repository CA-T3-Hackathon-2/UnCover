import React from "react";
import Map from "./Map";
import ResultItem from "./ResultItem";
import Loading from "./Loading";
import PageBox from "./PageBox";
import { locationToCoords, categoryIds } from "../utils/helpers";
import { Link } from "react-router-dom";
// assets
import Attribution from "../assets/attribution-eventfinda.gif";

const resultState = {
  loading: true,
  events: null,
  error: null,
  eventCount: 0,
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
    case "startRequest":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const Results = (props) => {
  const { category, dateFrom, dateTo, locationDistance, price } =
    props.formData;
  const { selectedlocation } = props;
  const categoryID = categoryIds[category.split(" ").join("").toLowerCase()];

  // State management
  const [resultsStore, dispatch] = React.useReducer(eventsReducer, resultState);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lat, setCurrentLat] = React.useState(
    locationToCoords[selectedlocation.toLowerCase()][0]
  );
  const [lng, setCurrentLng] = React.useState(
    locationToCoords[selectedlocation.toLowerCase()][1]
  );

  const { loading, events, error, pageCount } = resultsStore;
  const offset = currentPage * 20 - 20;

  // API Call to server
  React.useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "startRequest" });
        const response = await fetch(
          "https://uncover-eventfinder.herokuapp.com/api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              mode: "no-cors",
            },
            body: JSON.stringify({
              categoryID,
              lat,
              lng,
              dateFrom,
              dateTo,
              locationDistance,
              price,
              offset,
            }),
          }
        );
        const responseData = await response.json();

        // Work out page counts for pagination
        let pageCount = Math.floor(responseData["@attributes"].count / 20);
        if (responseData["@attributes"].count % 20 !== 0) pageCount += 1;

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
    })();
  }, [currentPage]);

  // Move map to marker
  if (loading) return <Loading />;

  if (error)
    return <p style={{ marginTop: "10rem", fontSize: "4rem" }}>{error}</p>;

  // Set up pageNumArray to map over
  const pageNumArray = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumArray.push(i);
  }

  const handleUpdateCoords = (targetEvent) => {
    setCurrentLat(targetEvent.point.lat);
    setCurrentLng(targetEvent.point.lng);
  };

  return (
    <section style={{ padding: " 1rem 3rem", height: "75vh" }}>
      <p style={{ marginTop: "2rem", paddingLeft: "5rem", fontSize: "1.8rem" }}>
        <Link to="/find" style={{ color: "inherit", textDecoration: "none" }}>
          Back
        </Link>
        {"  >  "}
        Results
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            alignSelf: "flex-start",
            paddingLeft: "5rem",
            paddingRight: "2rem",
            fontSize: "2rem",
            flex: "0.35",
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          <ResultItem events={events} handleUpdateCoords={handleUpdateCoords} />
        </div>
        <div style={{ flex: "0.65", margin: "10px", overflow: "hidden" }}>
          <Map events={events} lat={lat} lng={lng} key={lat} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "6rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {pageNumArray.map((page, i) => {
            return (
              <PageBox
                key={i}
                page={page}
                currentPage={currentPage}
                handleClick={() => setCurrentPage(page)}
              />
            );
          })}
        </div>
        <img
          style={{ justifySelf: "flex-end" }}
          src={Attribution}
          alt="powered by Eventfinda"
          width="200px"
        />
      </div>
    </section>
  );
};

export default Results;
