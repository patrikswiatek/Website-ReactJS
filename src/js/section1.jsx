import React from 'react';

	class Section1 extends React.Component {
		constructor(props) {
			super(props);
			this.myRef = React.createRef();
			this.myRef2 = React.createRef();
			this.myRef3 = React.createRef();

			this.state = {
				hoverS: false, hoverSa: false, hoverSb: false,
			}
		}

		mouseOnS = () => {
			this.setState({
				hoverS: true,
			});
			this.myRef.current.style.borderBottom = "2px solid orange";
		};
		mouseOffS = () => {
			this.setState({
				hoverS: false,
			});
			this.myRef.current.style.borderBottom = "2px solid whitesmoke";
		};
		mouseOnSa = () => {
			this.setState({
				hoverSa: true,
			});
			this.myRef2.current.style.borderBottom = "2px solid orange";
		};
		mouseOffSa = () => {
			this.setState({
				hoverSa: false,
			});
			this.myRef2.current.style.borderBottom = "2px solid whitesmoke";
		};
		mouseOnSb = () => {
			this.setState({
				hoverSb: true,
			});
			this.myRef3.current.style.borderBottom = "2px solid orange";
		};
		mouseOffSb = () => {
			this.setState({
				hoverSb: false,
			});
			this.myRef3.current.style.borderBottom = "2px solid whitesmoke";
		};



		render() {
			const styleS = {
				backgroundColor: this.state.hoverS ? 'white' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hoverS ? 'grey' : 'whitesmoke',


			};
			const styleSa = {
				backgroundColor: this.state.hoverSa ? 'white' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hoverSa ? 'grey' : 'whitesmoke',
			};
			const styleSb = {
				backgroundColor: this.state.hoverSb ? 'white' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hoverSb ? 'grey' : 'whitesmoke',

			};


			return (<div className='section1' >
				<div className='layer'>
					<section className='row container'>
						<div className='col-12 text'>
							<div className='title'>
								<div className='h1'>
									<h1>LET'S TALK ABOUT YOUR COMFORT</h1>
								</div>
								<div className='a'>
									<a>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>
								</div>
							</div>
							<div className='boxes'>
								<div className='box' onMouseOver={this.mouseOnS}
								     onMouseLeave={this.mouseOffS} style={styleS}>
									<span className='line' ref={this.myRef} />
									<div className='h4'>
										<h4>Donec ipsum massa</h4>
									</div>
									<div className='a1'>
										<a>Donec vitae arcu. Etiam sapien elit, consequat eget,
											tristique non, venenatis quis, ante. Nullam eget nisl.
											Donec ipsum massa, ullamcorper in, auctor et,
											scelerisque sed, est.</a>
									</div>
									<div className='a2'>
										<a href="">Read More >></a>
									</div>
								</div>
								<div className='box' onMouseOver={this.mouseOnSa}
								     onMouseLeave={this.mouseOffSa} style={styleSa}>
									<span className='line' ref={this.myRef2} />
									<div className='h4'>
										<h4>Donec ipsum massa</h4>
									</div>
									<div className='a1'>
										<a>Donec vitae arcu. Etiam sapien elit, consequat eget,
											tristique non, venenatis quis, ante. Nullam eget nisl.
											Donec ipsum massa, ullamcorper in, auctor et,
											scelerisque sed, est.</a>
									</div>
									<div className='a2'>
										<a href="">Read More >></a>
									</div>
								</div>

								<div className='box' onMouseOver={this.mouseOnSb}
								     onMouseLeave={this.mouseOffSb} style={styleSb}>
									<span className='line' ref={this.myRef3} />
									<div className='h4'>
										<h4>Donec ipsum massa</h4>
									</div>
									<div className='a1'>
										<a>Donec vitae arcu. Etiam sapien elit, consequat eget,
											tristique non, venenatis quis, ante. Nullam eget nisl.
											Donec ipsum massa, ullamcorper in, auctor et,
											scelerisque sed, est.</a>
									</div>
									<div className='a2'>
										<a href="">Read More >></a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>);
		}
	}

export default Section1;
