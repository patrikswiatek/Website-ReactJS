import React, { Component } from 'react';
import {
	HashRouter,
	Route,
	Switch,
} from 'react-router-dom';
import Main from './js/main.jsx'
import './App.scss';

class NotFound extends React.Component {

	render() {

		return (

			<div>
				<h1>404</h1>
			</div>

		);
	}
}

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Main}/>

					<Route component={NotFound}/>
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
