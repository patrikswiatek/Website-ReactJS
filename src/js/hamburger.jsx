import React from 'react'
import Link from "react-router-dom/es/Link";



	class HamburgerMenu extends React.Component {

		render() {
			return (<div className='panel noselect'>
				<div className='admin-panel'>
					<label className='textH' htmlFor='toggle' key='1'>MENU </label>
					<label className='fas fa-cog' htmlFor='toggle' key='2'> </label>
				</div>

				<input type='checkbox' id='toggle'/>

				<div className='menu-panel'>
					<div className='arrowH' />
					<ul className='hamb'>
						<li><Link to="/" className='column'>HOME</Link></li>


						<li><Link to="/contact" className='column'>CONTACT</Link></li>


						<li><Link to=""  className='column'>DROPDOWN</Link></li>


						<li><Link to="" className='column'>ABOUT</Link></li>
					</ul>
				</div>
			</div>);
		}
	}
	export default HamburgerMenu;