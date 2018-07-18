import React from 'react';


	class Section1 extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				hoverS: false, hoverSa: false, hoverSb: false,
			}
		}

		mouseOnS = () => {
			this.setState({
				hoverS: true,
			})
		};
		mouseOffS = () => {
			this.setState({
				hoverS: false,
			})
		};
		mouseOnSa = () => {
			this.setState({
				hoverSa: true,
			})
		};
		mouseOffSa = () => {
			this.setState({
				hoverSa: false,
			})
		};
		mouseOnSb = () => {
			this.setState({
				hoverSb: true,
			})
		};
		mouseOffSb = () => {
			this.setState({
				hoverSb: false,
			})
		};

		render() {

			const styleS = {
				backgroundColor: this.state.hoverS ? 'black' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hoverS ? 'orange' : 'whitesmoke',
			};
			const styleSa = {
				backgroundColor: this.state.hoverSa ? 'black' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hoverSa ? 'orange' : 'whitesmoke',
			};
			const styleSb = {
				backgroundColor: this.state.hoverSb ? 'black' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hoverSb ? 'orange' : 'whitesmoke',

			};


			return (<div className='section1'>
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
									<span className='line'/>
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
									<span className='line'/>
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
									<span className='line'/>
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
