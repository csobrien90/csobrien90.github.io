import Lightbox from "./Lightbox"
import bandbookScreenshot from '../images/bandbook.png';

const projects = [
	{
		title: "Software Engineer - Switcher",
		img: bandbookScreenshot,
		alt: "A screenshot of the Bandbook interface",
		content: <>
			Since April 2024, I have been working at Switcher, a Louisville-based tech
			startup offering an end to end solution for multicamera content creation, live
			streaming, and video hosting. My work is focused on Switcher's web presence,
			managing our custom, embeddable video player, our hosted video management dashboard,
			and our marketing site, a robust, custom HubSpot theme. You
			can <a target="_blank" href="//switcherstudio.com">learn more about Switcher's products here</a>.
		</>
	},
	{
		title: "Pride Pals Shopify Accordion Component",
		img: bandbookScreenshot,
		alt: "A screenshot of the Bandbook interface",
		content: <>
			<a target='_blank' href='//kittywithacupcake.com/pages/build-your-pronoun-pals-pin-set'>this accordion component in production</a>
		</>
	},
	{
		title: "JSON to Console Browser Extension",
		img: bandbookScreenshot,
		alt: "A screenshot of the Bandbook interface",
		content: <>
			<a target='_blank' href='//chromewebstore.google.com/detail/json-to-console/ifdijipapbhiflljbbdanboddcbpaoag'>my JSON to Console extension in the Chrome Web Store</a>
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
