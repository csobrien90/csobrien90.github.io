const ShowsInTown = () => {
	const backendLink = "https://github.com/csobrien90/shows-in-town-backend"
	const frontendLink = "https://github.com/csobrien90/shows-in-town"
	const prodLink = "/shows-in-town"

	return (
		<article id="shows-in-town">
			<h3 className="sr-only">Shows In Town Web App</h3>
				<h4>I love finding tech solutions to challenging problems!</h4>
				<p>Where I live (Louisville, KY), there is no centralized calendar of all live music events happening on a given night. I created a web scraper that compiles calendars from bands, venues, community organizations, etc. into a massive list of concerts. The data is displayed on the <a href="/shows-in-town"><strong>Shows In Town</strong> React app</a> where you can browse a timeline of upcoming events, jump to a specific date, and filter by venue.</p>

				{/* - Tech: Linnode -> Node -> S3 -> React (Jest/Enzyme) -> GitHub Pages (display in a flow chart) */}

				<p>This is an ever-growing project and I've brought a few other local developers on board to help expand the app. We're putting together a QA process with GitHub actions and automated testing - the front end is covered with tests written with Jest and Enzyme and the backend tests are in development now.</p>
				<div className="project-links">
					<a href={backendLink}>View Backend Code</a>
					<a href={frontendLink}>View Frontend Code</a>
					<a href={prodLink}>View Live Site</a>
				</div>
		</article>
	)
}

export default ShowsInTown