import React from 'react';
import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';

class Connect extends React.Component {
	render() {
        let now = new Date();
		let year = now.getFullYear();
		return(
			<section id="connect">
				<h2 className='sr-only'>Connect</h2>
				<p className='connectText'>Whether you have questions, comments, requests, or just want to chat, I'd love to hear from you! 
					Use this contact form to email me or connect with me on social media.
				</p>
				<ContactForm />
				<SocialMediaLinks />
				<footer>
					<p>&copy; Copyright {year} - Chad O'Brien</p>
				</footer>
			</section>
		)
    }
}

export default Connect;