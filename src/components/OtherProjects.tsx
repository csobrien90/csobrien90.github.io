import Lightbox from "./Lightbox"
import accordionScreenshot from '../images/accordion.png';
import extensionScreenshot from '../images/json-to-console.png';

const projects = [
		{
		title: "Pride Pals Shopify Accordion Component",
		img: accordionScreenshot,
		alt: "A screenshot of the Pride Pals Shopify Accordion Component",
		content: <>
			My wife is a wildly talented artist and small business owner. Her most popular product
			line is the Pride Pals enamel pin and sticker sets. Customers choose accessories depicting a wide
			variety of different aspects of their identity, from pronouns and pride flags to hobbies and interests.
			I built a custom accordion component for her Shopify store that allows users to browse available options
			by category, preview different combinations, and easily add selections to their cart.
			Behind the scenes, I created an admin dashboard to gain insights on conversion rates and patterns in customer
			behavior. You can see <a target='_blank' href='//kittywithacupcake.com/pages/build-your-pronoun-pals-pin-set'>this component in production</a>
			&nbsp;or check out the <a target='_blank' href='//github.com/csobrien90/accordion-selector'>source code on GitHub</a>.
		</>
	},
	{
		title: "JSON to Console Browser Extension",
		img: extensionScreenshot,
		alt: "A screenshot of the JSON to Console extension in the Chrome Web Store",
		content: <>
			Browser extensions are an underrated and underutilized tool to improve develop experience. I have built several
			extensions to help with my own workflows, and even took the time to published one. My JSON to Console extension
			grabs any JSON snippets on a page, parses them, and logs them to the console. I developed this tool when I was
			doing a lot of work with the WordPress REST API when building headless WordPress sites and custom themes/plugins.
			You can download <a target='_blank' href='//chromewebstore.google.com/detail/json-to-console/ifdijipapbhiflljbbdanboddcbpaoag'>the JSON to Console extension in the Chrome Web Store</a>
			- if you like it, take a second to give a positive review!
		</>
	}
]

const OtherProjects = (): JSX.Element => {
	return (
		<div className='other-projects backgroundBox'>
			<h3>Other Projects</h3>
			<div>
				{projects.map(project => {
					return (
						<article className="backgroundBox" key={project.title}>
							<h4 className="as-h6">{project.title}</h4>
							<Lightbox
								src={project.img}
								alt={project.alt}
							/>
							<p>{project.content}</p>
						</article>
					)
				})}
			</div>
		</div>
	)
}

export default OtherProjects
