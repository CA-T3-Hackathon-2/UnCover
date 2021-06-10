import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Nav from './components/Nav';
import Main from './components/Main';
import Find from './components/Find';
import About from './components/About';


const App = () => {

	return (
		<>
			<Router>
				<h1>UnCover</h1>
				<Nav />
				{/* <Switch>
					<Route exact path="/" render={props => <Main /> }  />
					<Route exact path="/about" render={props => <About /> }  />
					<Route exact path="/browse" render={props => <Find /> }  />
				</Switch> */}
			</Router>
		</>
	);
};

export default App;
