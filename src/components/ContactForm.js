import React from 'react';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			loading: false
		}
	}

	setProp = (event) => {
		let prop = event.target.id;
		switch (prop) {
			case 'name':
				this.setState({name: event.target.value})
				break;
			case 'email':
				this.setState({email: event.target.value})
				break;
			case 'subject':
				this.setState({subject: event.target.value})
				break;
			case 'message':
				this.setState({message: event.target.value})
				break;
			default:
				return;
		}
	};

	validateEmail = (email) => {
		return email.match(
		  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	showFormSubmitMessage = (message) => {
		// Display error message to user
		const responseMessage = document.querySelector('.contactFormSubmitResponse'); 
		responseMessage.style.opacity = 1;
		responseMessage.style.display = 'block';
		responseMessage.style.transition = 'all .3s';
		responseMessage.innerText = message;

		// Fade out message
		setTimeout(() => {
			responseMessage.style.opacity = 0;
			setTimeout(() => {responseMessage.style.display = 'none'}, 300);
		}, 3000);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({loading: true});
		
		// Get user input from state
		let formData = {
			"name": this.state.name,
			"email": this.state.email,
			"subject": this.state.subject,
			"message": this.state.message
		}

		// Validate email
		const isRealEmail = this.validateEmail(formData.email);
		if (!isRealEmail) {
			this.setState({loading: false});
			this.showFormSubmitMessage('Please enter a valid email and try again.');			
			return;
		}
		
		// Get reCaptcha token and call sendMessage
		window.grecaptcha.ready(() => {
		  window.grecaptcha.execute('6LfqcuwgAAAAAB_yFrR2KYBMeXNqU7u5Y3P43ol9', { action: 'submit' }).then(token => {
			this.sendMessage(formData, token);
		  });
		});

	}
	
	sendMessage = (formData, token) => {
		const endpoint = 'https://h9p6e34vp1.execute-api.us-east-2.amazonaws.com/email';
		fetch(
			endpoint,
			{
				method: 'POST',
				cache: 'no-cache',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					...formData,
					token
				})
			}
		).then(response => {
			if(response.ok) {
				return response.json();
			} else {
				this.setState({loading: false});
				this.showFormSubmitMessage('Something went wrong. Please refresh the page and try again.');
			}
		}).then(json => {
			if (json.status === 200 || json.status === 500) {
				this.setState({loading: false});
				this.showFormSubmitMessage(json.message);
			} else {
				this.setState({loading: false});
				this.showFormSubmitMessage('Something went wrong. Please refresh the page and try again.');
			}

			this.setState({name: ''});
			this.setState({email: ''});
			this.setState({subject: ''});
			this.setState({message: ''});
		});
	}

	render() {
		return(
			<form className='contactForm backgroundBox'>
				<label htmlFor="name">
					Name:
					<br></br>
					<input type="text" name="name" id="name" value={this.state.name} onChange={this.setProp} required/>
				</label>
				<label htmlFor="email">
					Email:
					<br></br>
					<input type="email" name="email" id="email" value={this.state.email} onChange={this.setProp} required/>
				</label>
				<label htmlFor="subject">
					Subject:
					<br></br>
					<input type="text" name="subject" id="subject" value={this.state.subject} onChange={this.setProp} required/>
				</label>
				<label htmlFor="message">
					Message:
					<br></br>
					<textarea name="message" id="message" value={this.state.message} onChange={this.setProp} required/>
				</label>
				<button id="contactFormSubmit" onClick={this.handleSubmit}>Send Message</button>
				<p className='contactFormSubmitResponse'></p>
				{this.state.loading && <div className='loadingCover'><p>Sending...</p></div>}
			</form>
		)
	}
}

export default ContactForm;