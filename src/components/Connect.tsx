import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';
import '../styles/connect.css';

const Connect = (): JSX.Element => {
	let now = new Date();
	let year = now.getFullYear();
	return(
		<section id="connect">
			<h2 className='sr-only'>Connect</h2>
			<div className='connectText backgroundBox'>
				<p>
					Whether you have questions, comments, requests, or just want to chat, I'd love to hear from you! 
					Use this contact form to email me or connect with me on social media.
				</p>
				<p>
					Looking for a less direct way of connecting? Check out <a href="/blog">my blog</a> where I share insights, updates, and stories.
				</p>
			</div>
			<ContactForm />
			<SocialMediaLinks />
			<footer>
				<p>&copy; Copyright {year} - Chad O'Brien</p>
			</footer>
		</section>
	)
}

export default Connect;