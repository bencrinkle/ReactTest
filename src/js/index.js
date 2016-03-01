import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';

class Index extends React.Component {
	render(){
		return (
			<div>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Router history={hashHistory}>
					<Route path="/" component={Index}>
						<IndexRoute component={Home}/>
						<Route path="aboutUs" component={AboutUs}/>
					</Route>
				</Router>, app);
