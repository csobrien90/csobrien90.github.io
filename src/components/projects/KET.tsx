import ResumeDownload from '../ResumeDownload'

const KET = () => {
	return (
		<article>
			<h3 className="sr-only">Kentucky Educational Television</h3>
			<h4>I'm a team player!</h4>
			<p>I am a full stack web developer for Kentucky Educational Television (KET). I started as a Web Developer I in October 2021 and was promoted to Web Developer II in November 2022. I work on a team of 7 developers - we are responsible for all of KET's web assets. Most of our stack is pretty traditionally built - Linux, Nginx, MySQL, and PHP with WordPress (CMS), WooCommerce (eCommerce), and Moodle (LMS) - but we are constantly paying off tech debt. Our infrastructure is completely cloud-based (AWS), we use serverless functions to automate our media pipeline, and we are currently converting several sites to headless WordPress with React.</p>
			<p>Of course, the proof's in the pudding. Go watch some excellent public media content at <a href='https://ket.org'>KET.org</a>. I'm really proud of the work we do at KET and really enjoy providing this service to my state!</p>
			<p>If you want to know details about my specific roles and responsibilities at KET, my previous work experience, or my education. Download my resume!</p>
			<ResumeDownload />
		</article>
	)
}

export default KET