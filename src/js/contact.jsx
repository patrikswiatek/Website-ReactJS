import React from 'react'


class Contact extends React.Component {


	render() {

		return (<label htmlFor={this.props.htmlFor}>{this.props.title}</label>)
	}
}

class ContactForm extends React.Component {
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
				<div className='layer'>
				<div className="flexwrap">
					<div className="arrowed">
						<div className="arrow-1"/>
					</div>
				</div>

				<form className='react-form' onSubmit={this.handleSubmit}>

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
						<input id='formButton' className='btn' type='submit'
						       placeholder='Send message'/>
					</div>
				</form>
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

export default ContactForm;
