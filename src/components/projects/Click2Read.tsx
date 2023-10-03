const Click2Read = () => {
	const jsonToConsoleLink = 'https://chrome.google.com/webstore/detail/json-to-console/ifdijipapbhiflljbbdanboddcbpaoag'
	const click2ReadCodeLink = 'https://github.com/csobrien90/click-to-read'
	const click2ReadDownloadLink = null

	return (
		<article>
			<h3 className="sr-only">Click2Read Browser Extension</h3>
			<h4>Nothing beats strong fundamentals.</h4>
			<p>And browser extensions are the perfect place to hone web dev skills! Click2Read is a Chrome browser extension I built that allows you to select text on a webpage and have it read aloud to you. It's the second extension I have published in the Chrome Web Store (the first is called <a href={jsonToConsoleLink} target="_blank"><strong>JSON to Console</strong></a>). I really enjoyed working with modern web features (like the SpeechSynthesis and Chrome Storage Web APIs) and loading it up with all sorts of flashy CSS ✨</p>

			{/*
				Feature Slideshow Thingy
				
				Variables - gif of theme change
				Inputs - select, dials, keycaps
				Animations - light switch, buttons
			*/}

			<p>I didn't build this as a screenreader substitute, but I did want to ensure that the options popup and the tool itself were fully accessible. And I did pretty well - it meets the WCAG 2.1 AAA standards!</p>
			<div className="project-links">
				<a href={click2ReadCodeLink} target="_blank">Check the code out on Github</a>
				{click2ReadDownloadLink && <a href={click2ReadDownloadLink} target="_blank">Get Click2Read in the Chrome Web Store</a>}
				<a href={jsonToConsoleLink} target="_blank">Get the JSON to Console extension</a>
			</div>
		</article>
	)
}

export default Click2Read