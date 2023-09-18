const Portfolio = () => {
	const oldPortfolioGithubLink = "https://github.com/csobrien90/old-portfolio"
	const yearsSinceStart = new Date().getFullYear() - 2021
	return (
		<article>
			<h3 className="sr-only">My Portfolio (this page!)</h3>
			<h4>Curiosity is my defining characteristic.</h4>
			{/* REFACTOR COPY */}
			<p>I love exploring new technologies and my Portfolio has been the perfect testing ground. Most recently, I had a blast converting this page to Typescript. And, of course, I couldn't pass up an opportunity for a quick serverless contact form. The top priority was setting up ReCaptcha to prevent spam - I'm always shocked by how much bot traffic even the most obscure forms get. I originally wrote the function in JavaScript but decided to convert it to Java to get some experience with that language.</p>
			<p>This portfolio is a great way to track my progress as a developer. It's awesome to think where my understanding of the Web was <a href={oldPortfolioGithubLink} target="_blank">when I first built this page</a>. That was only {yearsSinceStart} years ago! I'm excited to see where I'll be when I next update this page. No matter how serious my skills get though, I will always value the whimsy that made me fall in love with the Web in the first place. In that vein, I've coded some fun Easter eggs into this page for your browsing pleasure. Can you find them all?</p>
			{
				// EASTER EGG COUNTER
			}
		</article>
	)
}

export default Portfolio