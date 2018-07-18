import React from 'react'
import Address from "./address.jsx";
import Header from "./header.jsx";
import Section2 from "./section2.jsx";
import Section3 from "./section3.jsx";
import Footer from "./footer.jsx";
import './../App.scss'

class Contact extends React.Component {


	render() {

		return (<label htmlFor={this.props.htmlFor}>{this.props.title}</label>)
	}
}

class PreContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {name: '', email: '', subject: '', message: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		let newState = {};

		newState[e.target.name] = e.target.value;

		this.setState(newState)
	};


	handleSubmit = (e, message) => {
		e.preventDefault();

		let formData = {
			formSender: this.state.name,
			formEmail: this.state.email,
			formSubject: this.state.subject,
			formMessage: this.state.message
		};

		if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {return false}




		/*
		$.ajax({
			url: 'http://localhost:3000/messages',
			dataType: 'json',
			type: 'POST',
			data: formData,
			success: function (data) {
				if (confirm('Thank you for your message. Can I erase the form?')) {
					$('.form-input').val('');
					$('.form-textarea').val('');

				}
			},
			error: function (xhr, status, err) {
				console.error(status, err.toString());

				alert('There was some problem with sending your message.')
			}
		});
*/
		this.setState({firstName: '', lastName: '', email: '', subject: '', message: ''})
	};

	render() {




		return (
			<div className="contact">
				<div className="layer2">
					<div className="row container">
				<form className='react-form col-12' onSubmit={this.handleSubmit}>

					<h1>If you would like more information or have any questions, please leave
						us a message we will do our best to get back to you as soon as
						possible.</h1>

					<fieldset className='form-group'>
						<Contact htmlFor='formName' title='Full Name:'/>

						<input id='formName' className='form-input' name='name' type='text'
						       required onChange={this.handleChange} value={this.state.name}/>
					</fieldset>

					<fieldset className='form-group'>
						<Contact htmlFor='formEmail' title='Email:'/>

						<input id='formEmail' className='form-input' name='email' type='email'
						       required onChange={this.handleChange} value={this.state.email}/>
					</fieldset>

					<fieldset className='form-group'>
						<Contact htmlFor='formSubject' title='Subject:'/>

						<input id='formSubject' className='form-input' name='subject'
						       type='text' required onChange={this.handleChange}
						       value={this.state.subject}/>
					</fieldset>

					<fieldset className='form-group'>
						<Contact htmlFor='formMessage' title='Message:'/>

						<textarea id='formMessage' className='form-textarea' name='message'
						          required onChange={this.handleChange}>

			</textarea>
					</fieldset>

					<div className='form-group'>
						<button className='btn' type='submit'>SEND MESSAGE</button>
					</div>
				</form>
					</div>
				</div>
			</div>);

	}
/*
	componentDidMount() {
		fetch('http://localhost:3000/messages')
			.then(resp => {
				if() {
					return resp.json();
				} else {
					throw new Error('Błąd sieci!');
				}
			})
			.then(data => {
				const title = data.items[0].volumeInfo.title;

				this.setState({
					title: title,
				});

			}).catch(err => console.log(err));
	}
*/
}
class ContactForm extends React.Component {
	render(){
		return (
			<div className='grid-container'>
				<Address/>
				<Header />
				<PreContactForm />
				<Section2/>
				<Section3/>
				<Footer/>
			</div>
		);
	}
}


export default ContactForm;
