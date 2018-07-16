import React from 'react'
import Address from "./address.jsx";
import Header from "./header.jsx";
import Section1 from "./section1.jsx";
import Section2 from "./section2.jsx";
import Section3 from "./section3.jsx";
import Footer from "./footer.jsx";
import './../App.scss'
/*import Contact from "./contact.jsx";*/



	class Main extends React.Component {
		render(){

			return(
				<div className='grid-container'>
					<Address />
					<Header />

					<Section1 />
					<Section2 />
					<Section3 />
					<Footer />
				</div>
			);
		}
	}

	export default Main;


