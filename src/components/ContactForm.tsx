import { ContactFormData, ContactFormLambdaResponse } from '@/types';
import { ChangeEvent, useState } from 'react';
import ContactFormField from './ContactFormField';

const ContactForm = (): JSX.Element => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [loading, setLoading] = useState(false);

	const setProp = (event: ChangeEvent ): void => {
		let input = event.target as HTMLInputElement;
		let prop = input.id;
		setFormData({...formData, [prop]: input.value});
	};

	const validateEmail = (email: string) => {
		return email.match(
		  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	const showFormSubmitMessage = (message: string) => {
		// Display error message to user
		const responseMessage: HTMLParagraphElement | null = document.querySelector('.contactFormSubmitResponse')
		if (!responseMessage) return

		responseMessage.style.opacity = '1';
		responseMessage.style.display = 'block';
		responseMessage.style.transition = 'all .3s';
		responseMessage.innerText = message;

		// Fade out message
		setTimeout(() => {
			responseMessage.style.opacity = '0';
			setTimeout(() => {responseMessage.style.display = 'none'}, 300);
		}, 3000);
	}

	const handleSubmit = (event: React.MouseEvent): void => {
		event.preventDefault();
		setLoading(true);

		// Validate email
		const isRealEmail = validateEmail(formData.email);
		if (!isRealEmail) {
			setLoading(false)
			showFormSubmitMessage('Please enter a valid email and try again.');			
			return;
		}
		
		// Get reCaptcha token and call sendMessage

		window.grecaptcha.ready(() => {
		  window.grecaptcha.execute('6LfqcuwgAAAAAB_yFrR2KYBMeXNqU7u5Y3P43ol9', { action: 'submit' }).then((token: string) => {
			sendMessage(formData, token);
		  });
		});

	}
	
	const sendMessage = (formData: ContactFormData, token: string) => {
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
		).then((response: Response): Promise<ContactFormLambdaResponse> => {
			if(response.ok) {
				return response.json();
			} else {
				setLoading(false)
				showFormSubmitMessage('Something went wrong. Please refresh the page and try again.');
				throw new Error();
			}
		}).then((json: ContactFormLambdaResponse): void => {
			if (json.status === 200 || json.status === 500) {
				setLoading(false)
				showFormSubmitMessage(json.message);
			} else {
				setLoading(false)
				showFormSubmitMessage('Something went wrong. Please refresh the page and try again.');
			}

			setFormData({
				name: '',
				email: '',
				subject: '',
				message: ''
			})
		}).catch(() => {
			setLoading(false)
			showFormSubmitMessage('Something went wrong. Please refresh the page and try again.');
		})
	}

	return(
		<form className='contactForm backgroundBox'>
			<ContactFormField type='text' name='name' value={formData.name} setProp={setProp} />
			<ContactFormField type='email' name='email' value={formData.email} setProp={setProp} />
			<ContactFormField type='text' name='subject' value={formData.subject} setProp={setProp} />
			<ContactFormField type='textarea' name='message' value={formData.message} setProp={setProp} />
			<button id="contactFormSubmit" onClick={(e: React.MouseEvent) => handleSubmit(e)}>Send Message</button>
			<p className='contactFormSubmitResponse'></p>
			{loading && <div className='loadingCover'><p>Sending...</p></div>}
		</form>
	)
}

export default ContactForm;