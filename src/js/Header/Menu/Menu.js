import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
	render(){
		const Links = [
			{
				name: 'Home',
				to: '/'
			},
			{
				name: 'About Us',
				to: 'aboutUs'
			}
		].map((link, i) => <li key={i}><Link to={link.to}>{link.name}</Link></li>);

		return(
			<ul>
				{Links}
			</ul>
		);
	}
}
