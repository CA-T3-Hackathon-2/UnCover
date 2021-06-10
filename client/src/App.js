import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Main from "./components/Main";
import Find from "./components/Find";
import About from "./components/About";
//utils
import reducer from "./utils/reducer";

const App = () => {
  const initialState = {
    location: "Melbourne",
    loading: false,
    error: "",
    events: [],
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const { location, loading, error, events } = store;

  const setLocation = (location) => {
    dispatch({
      type: "setLocation",
      data: location,
    });
  };

  console.log("from App,js: " + location);
  return (
    <>
      <Router>
        <Nav selectedlocation={location} setLocation={setLocation} />
        <Switch>
          <Route exact path="/" render={(props) => <Main />} />
          {/* <Route exact path="/about" render={props => <About /> }  />
					<Route exact path="/browse" render={props => <Find /> }  /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
