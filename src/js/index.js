import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

import AboutUs from './AboutUs/AboutUs';
import Home from './Home/Home';

class Index extends React.Component {
	render(){
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to="aboutUs">About Us</Link>
				{this.props.children}
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Router history={hashHistory}>
					<Route path="/" component={Index}>
						<IndexRoute component={Home}></IndexRoute>
						<Route path="aboutUs" component={AboutUs}/>
					</Route>
				</Router>, app);
