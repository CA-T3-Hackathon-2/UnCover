import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Main from "./components/Main";
import Find from "./components/Find";
import Results from "./components/Results";
//utils
import reducer from "./utils/reducer";
import { dateFormatted } from "./utils/helpers";

let futureDate = new Date();
futureDate = new Date(futureDate.setMonth(futureDate.getMonth() + 3));

const App = () => {
  const initialState = {
    location: "Melbourne",
    loading: false,
    error: "",
    events: [],
    category: "All Events",
    dateFrom: dateFormatted(new Date()),
    dateTo: dateFormatted(futureDate),
    locationDistance: 10,
    price: 50,
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const { location, category, dateFrom, dateTo, locationDistance, price } =
    store;
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
          {/* <Route exact path="/about" render={props => <About /> }  /> */}
          <Route
            exact
            path="/find"
            render={(props) => (
              <Find {...props} formData={formData} dispatch={dispatch} />
            )}
          />
          <Route
            exact
            path="/results"
            render={(props) => <Results formData={formData} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
