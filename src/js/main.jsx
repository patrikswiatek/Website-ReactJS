import React from 'react'
import Address from "./address.jsx";
import Header from "./header.jsx";
import Section1 from "./section1.jsx";
import Section2 from "./section2.jsx";
import Section3 from "./section3.jsx";
import Footer from "./footer.jsx";
import './../App.scss'



class Main extends React.Component {
	/*
	constructor(props) {
		super(props);

		this.state = {
			isContactFormVisible: false,
		}
	}

	hadleContactForm = () => {
		this.setState({
			isContactFormVisible: true,
		})
	};

*/
	render() {
		return (<div className='grid-container'>
			<Address/>
			<Header />
			<Section1/>
			<Section2/>
			<Section3/>
			<Footer/>
		</div>);
	}
}


export default Main;

/*
render(){
		if(this.state.isContactFormVisible === true)
		return(
			<div className='grid-container'>
				<Address />
				<Header showContactForm={this.hadleContactForm} />

				<ContactForm />
				<Section1 />
				<Section2 />
				<Section3 />
				<Footer />
			</div>);
		else {

			return(
				<div className='grid-container'>
					<Address />
					<Header showContactForm={this.hadleContactForm} />
					<Section1 />
					<Section2 />
					<Section3 />
					<Footer />
				</div>);
		}
	}
}
 */