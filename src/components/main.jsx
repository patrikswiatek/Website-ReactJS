import React from 'react'
import Address from "./address.jsx";
import Header from "./header.jsx";
import Section1 from "./section1.jsx";
import Section2 from "./section2.jsx";
import Section3 from "./section3.jsx";
import Footer from "./footer.jsx";
import Footer2 from "./footer2.jsx";



class Main extends React.Component {
	render() {
		return (<div className='grid-container'>
			<Address/>
			<Header />
			<Section1/>
			<Section2/>
			<Section3/>
			<Footer/>
			<Footer2/>
		</div>);
	}
}

export default Main;