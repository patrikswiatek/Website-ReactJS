import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from "react-router-dom/es/Link";

class Hamburger extends React.Component {
	showSettings (event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className='hamburger'>
			<Menu>
				<ul>
					<li><Link id="home" className="menu-item" to="/">HOME</Link></li>
					<li><Link id="contact" className="menu-item" to="/contact" >CONTACT</Link></li>
					<li><Link id="about" className="menu-item" to="">ABOUT</Link></li>
					<li><Link onClick={ this.showSettings } className="menu-item--small" to="">CLOSE</Link></li>
				</ul>
			</Menu>
			</div>
		);
	}
}
export default Hamburger;
