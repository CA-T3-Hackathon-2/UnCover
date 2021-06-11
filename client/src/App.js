import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Main from "./components/Main";
import Find from "./components/Find";
import Results from "./components/Results";
import About from './components/About';
//utils
import reducer from "./utils/reducer";
import { dateFormatted } from "./utils/helpers";

let futureDate = new Date();
futureDate = new Date(futureDate.setMonth(futureDate.getMonth() + 3));

const App = () => {
  const initialState = {
    location: sessionStorage.getItem("location") || "Melbourne",
    categories: [
      "Music",
      "Performing Arts",
      "Sports and Outdoors",
      "Festivals and Lifestyle",
      "Exhibitions",
      "Workshops and Education",
      "All Events",
    ],
    category: sessionStorage.getItem("category") || "All Events",
    dateFrom: sessionStorage.getItem("dateFrom") || dateFormatted(new Date()),
    dateTo: sessionStorage.getItem("dateTo") || dateFormatted(futureDate),
    locationDistance: sessionStorage.getItem("locationDistance") || 10,
    price: sessionStorage.getItem("price") || 50,
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const {
    location,
    category,
    dateFrom,
    dateTo,
    locationDistance,
    price,
    categories,
  } = store;
  const formData = { category, dateFrom, dateTo, locationDistance, price };

  const setLocation = (location) => {
    dispatch({
      type: "setLocation",
      data: location,
    });
  };

  return (
    <>
      <Router>
        <Nav selectedlocation={location} setLocation={setLocation} />
        <Switch>
          <Route exact path="/" render={(props) => <Main />} />
          <Route exact path="/about" render={props => <About /> }  />
          <Route
            exact
            path="/find"
            render={(props) => (
              <Find
                {...props}
                formData={formData}
                dispatch={dispatch}
                categories={categories}
              />
            )}
          />
          <Route
            exact
            path="/results"
            render={(props) => (
              <Results formData={formData} selectedlocation={location} />
            )}
          />
          <Route
            render={() => (
              <h2 style={{ marginTop: "5rem", fontSize: "4rem" }}>
                404 Content Not Found
              </h2>
            )}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
