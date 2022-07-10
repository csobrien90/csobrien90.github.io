import React from 'react';
import links from '../links.json';

class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeLink: "about",
			expanded: false
		}
	}

	componentDidMount() {
		const offset = 0 - document.querySelector('#about').getBoundingClientRect().y;
		const experienceY = document.querySelector('#experience').getBoundingClientRect().y + offset;
		const interestsY = document.querySelector('#interests').getBoundingClientRect().y + offset;
		const connectY = document.querySelector('#connect').getBoundingClientRect().y + offset;
		
		window.addEventListener('scroll', (e) => {
			var pos = window.scrollY;
			if ( pos >= 0 && pos < experienceY ) {
				this.setState({activeLink: "about"});
			} else if ( pos >= experienceY && pos < interestsY ) {
				this.setState({activeLink: "experience"});
			} else if ( pos >= interestsY && pos < connectY ) {
				this.setState({activeLink: "interests"});
			} else if ( pos >= connectY) {
				this.setState({activeLink: "connect"});
			}
		})
	}

	expand = (e) => {
		this.setState({expanded: !this.state.expanded});
	}

	render() {
		return(
			<nav className='pageNav' onClick={this.expand} aria-expanded={this.state.expanded}>
				{
					links && links.map((link, index) => {
						const activeClass = this.state.activeLink === link.displayText.toLowerCase() ? 'active' : '';
						return <a className={activeClass} href={link.href} key={index}>{link.displayText}</a>
					})
				}
			</nav>
		)
	}
}

export default Navigation;