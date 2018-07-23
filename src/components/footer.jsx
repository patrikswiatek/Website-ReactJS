import React from 'react'


	class Footer extends React.Component {

		render(){
			return(
				<div className='footer'>
					<footer className='row container'>
						<div className='placeholders col-12'>
						<div className='placeholder'>
							<div className='word'>
								CONTACT
							</div>
							<div className="line2" />
							<div className='address'>
								<a>Sit On Chair</a>
								<a>Champions 1</a>
								<a>10598 London</a><br />
								<a>601 708 000</a>
								<a>sitonchair@gmail.com</a>
							</div>
						</div>
						<div className='col-3 placeholder'>
							<div className='word'>
								QUICK LINKS
							</div>
							<div className="line2" />
							<div className='words'>
								<div className='links'><a href=''>Sit On Chair</a><br /><br /><a href=''>10598 London</a><br /><br /><a href=''>sitonchair@gmail.com</a></div>
							</div>
						</div>
						<div className='col-3 placeholder'>
							<div className='word'>
								FROM THE BLOG
							</div>
							<div className="line2" />
							<div className='words'>
							<a>Donec scelerisque id, mattis nec, nisl. Sed sed nunc. Suspendisse sed est pretium porttitor. Nulla gravida pulvinar.</a>
						</div>
						</div>
						<div className='col-3 placeholder'>
							<div className='word'>
								NEWSLETTER
							</div>
							<div className="line2" />
							<form>
								<label>
									<a>Name:</a>
									<input type="text" name="name" />
								</label>
								<label>
									<a>E-mail:</a>
									<input type='email' name="mail" />
								</label>
								<button type="submit" className='newsBtn'><a>SUBMIT</a></button>
							</form>
						</div>
						</div>
					</footer>

				</div>
			);
		}
	}

	export default Footer;