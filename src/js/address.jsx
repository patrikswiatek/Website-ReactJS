import React from 'react';
import phone from './../images/phone.png';
import mail from './../images/mail.png';
import fb from './../images/fb.png';
import pin from './../images/pin.png';
import twit from './../images/twit.png';
import linked from './../images/linked.png';
import google from './../images/google.png';


	class Address extends React.Component {
		render(){
			return(
				<div className='address'>
					<address className='row container'>
						<div className='media col-12'>
							<div className='contacts'>
								<img alt="" src={phone} /><a>601 708 000</a>
								<img alt="" src={mail} /><a>sitonchair@gmail.com</a>
							</div>
							<div className='icons'>
								<a href=""><img alt="" src={fb} /></a>
								<a href=""><img alt="" src={pin} /></a>
								<a href=""><img alt="" src={twit} /></a>
								<a href=""><img alt="" src={linked} /></a>
								<a href=""><img alt="" src={google} /></a>
							</div>
						</div>
					</address>
				</div>
			);
		}
	}

	export default Address;