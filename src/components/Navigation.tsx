import { useEffect, useState } from 'react';
import links from '../data/links.json'

const Navigation = (): JSX.Element => {

	const [activeLink, setActiveLink] = useState("about");
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		// Get DOM elements
		const about: HTMLElement | null = document.querySelector('#about');
		const experience: HTMLElement | null = document.querySelector('#experience');
		const interests: HTMLElement | null = document.querySelector('#interests');
		const connect: HTMLElement | null = document.querySelector('#connect');
		
		// Get the offset of the first element
		const offset = 0 - about!.getBoundingClientRect().y;

		// Get the offset of the other elements
		const experienceY = experience!.getBoundingClientRect().y + offset;
		const interestsY = interests!.getBoundingClientRect().y + offset;
		const connectY = connect!.getBoundingClientRect().y + offset;

		// Add event listener
		window.addEventListener('scroll', () => {
			var pos = window.scrollY;
			if ( pos >= 0 && pos < experienceY ) {
				setActiveLink("about");
			} else if ( pos >= experienceY && pos < interestsY ) {
				setActiveLink("experience");
			} else if ( pos >= interestsY && pos < connectY ) {
				setActiveLink("interests");
			} else if ( pos >= connectY) {
				setActiveLink("connect");
			}
		})
	}, []);


	const expand = () => { if (window.innerWidth < 769) setExpanded(!expanded) }

	return (
		<nav className='pageNav' onClick={expand} aria-expanded={expanded}>
			{
				links && links.map((link, index) => {
					const activeClass = activeLink === link.displayText.toLowerCase() ? 'active' : '';
					return <a className={activeClass} href={link.href} key={index}>{link.displayText}</a>
				})
			}
		</nav>
	)
}

export default Navigation;