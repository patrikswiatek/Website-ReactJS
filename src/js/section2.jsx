import React from 'react'
import chair from './../images/chair.jpg'


	class Section2 extends React.Component {

		render(){
			return(
				<div className='section2'>
					<section className='row container'>
						<div className='col-12 info'>
							<div className='image'>
								<img alt="" src={chair} />
							</div>
							<div className='allinfo'>
								<div className='heading'>
									<h2>Lorem ipsum officia deserunt</h2>
									<a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quimollit officia deserunt mollit anim est id est id laborum. Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.</a>
								</div>
								<div className='texts'>
									<div className='text'>
										<h4>Duis aute</h4>
										<a>Duis aute irure dolor insa reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla euos pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quimollit officia deserunt mollit anim est id est id laborum. Lorem ipsum.</a>
									</div>
									<div className='text'>
										<h4>Excepteur sint</h4>
										<a>Duis aute irure dolor insa reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla euos pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quimollit officia deserunt mollit anim est id est id laborum. Lorem ipsum.</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			);
		}
	}

	export default Section2;