import React from 'react';

export default class MenuButton extends React.Component {
	render(){
		return(<a onClick={this.props.clickEvent} href="#">Menu Button</a>);
	}
}
