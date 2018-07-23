import React from 'react';
import phone from './../media/phone.png';
import mail from './../media/mail.png';
import fb from './../media/fb.png';
import pin from './../media/pin.png';
import twit from './../media/twit.png';
import linked from './../media/linked.png';
import google from './../media/google.png';


	class Address extends React.Component {
		render(){
			return(
				<div className='address'>
					<address className='row container'>
						<div className='media col-12'>
							<div className='contacts'>
								<img alt="" src={phone} /><a>601708000</a>
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