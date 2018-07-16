import React from 'react'
import Link from "react-router-dom/es/Link";


	class Header extends React.Component {

		render() {

			return(
				<div className='menu'>
					<header className='row container'>
						<div className='col-6 logo'>
							<a>Sit <span>On</span> Chair</a>
						</div>
						<nav className='col-6'>
							<ul>
								<li><Link to="/">HOME</Link></li>
								<li><Link to="/Contact">CONTACT</Link></li>
								<li><a href="">DROPDOWN</a></li>
								<li><a href="">LINK TEXT</a></li>
							</ul>
						</nav>
					</header>
				</div>
			);
		}
	}

	export default Header;