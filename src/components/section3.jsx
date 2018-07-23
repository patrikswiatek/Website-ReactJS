import React from 'react'
import se3 from './../media/se3.png'

class Section3 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hoverS3: false,
			hoverS3a: false,
			hoverS3b: false,
		}
	}

	mouseOnS3 = () => {
		this.setState({
			hoverS3: true,
		})
	};
	mouseOffS3 = () => {
		this.setState({
			hoverS3: false,
		})
	};
	mouseOnS3a = () => {
		this.setState({
			hoverS3a: true,
		})
	};
	mouseOffS3a = () => {
		this.setState({
			hoverS3a: false,
		})
	};
	mouseOnS3b = () => {
		this.setState({
			hoverS3b: true,
		})
	};
	mouseOffS3b = () => {
		this.setState({
			hoverS3b: false,
		})
	};



	render() {

		const styleS3 = {
			backgroundColor: this.state.hoverS3 ? 'white' : 'orange',
			color: this.state.hoverS3 ? 'grey' : 'white',
		};
		const styleS3a = {
			backgroundColor: this.state.hoverS3a ? 'white' : 'orange',
			color: this.state.hoverS3a ? 'grey' : 'white',
		};
		const styleS3b = {
			backgroundColor: this.state.hoverS3b ? 'white' : 'orange',
			color: this.state.hoverS3b ? 'grey' : 'white',
		};


		return(
			<div className='section3'>
				<section className='row container'>
					<div className='col-12'>
						<div className='containTitle'>
							<h3>LOREM IPSUM OFFICIA DESERUNT</h3>
							<a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quimollit officia deserunt mollit anim est id est id laborum. Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.</a>
						</div>
						<div className='contain'>
							<div className='containImage'><img alt="" src={se3} /></div>
							<div className='boxes1-3'>
								<div className='box1' onMouseOver={this.mouseOnS3} onMouseLeave={this.mouseOffS3} style={styleS3}>Lorem ipsum dis dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus laboris nisi ut aliquip ex ea et magnis dis parturient montes, nascetur.</div>
								<div className='box2' onMouseOver={this.mouseOnS3a} onMouseLeave={this.mouseOffS3a} style={styleS3a}>Lorem ipsum dis dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus laboris nisi ut aliquip ex ea et magnis dis parturient montes, nascetur.</div>
								<div className='box3' onMouseOver={this.mouseOnS3b} onMouseLeave={this.mouseOffS3b} style={styleS3b}>Lorem ipsum dis dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus laboris nisi ut aliquip ex ea et magnis dis parturient montes, nascetur.</div>
							</div>
						</div>
					</div>
				</section>
			</div>

		);
	}
}

export default Section3;