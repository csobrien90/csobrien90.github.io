import EggCounter from "../EggCounter"

const Portfolio = () => {
	const oldPortfolioGithubLink = "https://github.com/csobrien90/old-portfolio"
	return (
		<article>
			<h3 className="sr-only">My Portfolio (this page!)</h3>
			<h4>Curiosity is my defining characteristic.</h4>
			<p>I love exploring new tech and my portfolio has been the perfect testing ground. I converted the JavaScript React class components to functional components in Typescript. The contact form (processed by a serverless Lambda function) was originally in JavaScript, but I decided to convert it to Java to get more experience with that language.</p>
			<p>This portfolio is a great way to track my progress as a developer. It's awesome to think where my understanding of the Web was when I built <a href={oldPortfolioGithubLink} target="_blank">my first portfolio</a>. But no matter how serious my skills get, I'll always keep the whimsy that made me fall in love with the Web in the first place. In that vein, I've coded some fun Easter eggs into this page for your browsing pleasure. Can you find them all?</p>
			<EggCounter />
		</article>
	)
}

export default Portfolio