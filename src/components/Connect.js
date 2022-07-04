import React from 'react';

class Connect extends React.Component {
	
	sendMessage = () => {
		// Get and sanitize user input
		// Call to contact form handler lambda
		// Alert user whether email was sent successfully
	}
    
	render() {
        let now = new Date();
		let year = now.getFullYear();
		return(
			<section id="connect">
				<h2 className='sr-only'>Connect</h2>
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
				<footer>
					<p>&copy; Copyright {year} - Chad O'Brien</p>
				</footer>
			</section>
		)
    }
}

export default Connect;