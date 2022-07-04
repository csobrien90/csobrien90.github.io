import React from 'react';

class ContactForm extends React.Component {
	
	sendMessage = (e) => {
		e.preventDefault();
		// Get and sanitize user input
		// Call to contact form handler lambda
		// Alert user whether email was sent successfully
		alert('Sorry - this contact form is not yet functioning! While I am working on it, feel free to contact me using the form found at obrientrombone.com/connect.html');
	}
    
	render() {
		return(
			<form>
				<label htmlFor="name">
					Name:
					<br></br>
					<input type="text" name="name" id="name" />
				</label>
				<label htmlFor="email">
					Email:
					<br></br>
					<input type="email" name="email" id="email" />
				</label>
				<label htmlFor="subject">
					Subject:
					<br></br>
					<input type="text" name="subject" id="subject" />
				</label>
				<label htmlFor="message">
					Message:
					<br></br>
					<textarea name="message" id="message" />
				</label>
				<button id="contactFormSubmit" onClick={this.sendMessage}>Send Message</button>
			</form>
		)
    }
}

export default ContactForm;