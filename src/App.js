import React, {Component} from 'react';
import {
	HashRouter, Route, Switch,
} from 'react-router-dom';
import Main from './js/main.jsx'
import ContactForm from './js/contact.jsx'
import Testing from './js/testing.jsx'
import './App.scss';

class NotFound extends React.Component {

	render() {
		return (<div>
				<h1>404</h1>
			</div>);
	}
}

class App extends Component {
	render() {
		return (<HashRouter>
			<div>
				<Switch>
					<Route exact path='/' component={Main}/>
					<Route exact path='/contact' component={ContactForm}/>
					<Route exact path='/t' component={Testing}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
			</HashRouter>);
	}
}

export default App;
