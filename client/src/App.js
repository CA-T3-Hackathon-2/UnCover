import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Nav from './components/Nav';
import Main from './components/Main';
import Find from './components/Find';
import About from './components/About';
import Form from './components/Form'
//utils
import reducer from "./utils/reducer";
import formReducer from "./utils/form-reducer";
import CategoryBoxes from "./components/CategoryBoxes";

const App = () => {

  const initialState = {
    location: "Melbourne",
    loading: false,
    error: "",
    events: []
  };

  const initialFormState = {
      category: "",
      dateFrom: new Date(),
      dateTo: new Date(),
      locationDistance: 10,
      price: 50
  }

  const [store, dispatch] = useReducer(reducer, initialState);
  const [formStore, dispatch] = useReducer(formReducer, initialFormState);
  const { location, loading, error, events} = store;
  const {formData} = formStore;

  const setLocation = (location) => {
    dispatch({
      type: "setLocation",
      data: location,
    });
  };

  const setFormData = (data) => {
    dispatch({
      type: "setFormData",
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
					<Route exact path="/find" render={props => <Find {...props} location={location} formData={formData} setFormData={setFormData}  /> }  />
        </Switch>
      </Router>
    </>
  );
};

export default App;
