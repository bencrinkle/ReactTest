import React from 'react';

import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuButton';

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = { showMenu: false };
	}
	showHideMenu(e){
		e.preventDefault();
		this.setState({ showMenu: !this.state.showMenu });
	}
	render(){
		return (
			<div>
				<MenuButton clickEvent={this.showHideMenu.bind(this)}/>
				{this.state.showMenu ? <Menu/> : null}
			</div>
		);
	}
}
