import React from 'react';
import links from '../links.json';

class Navigation extends React.Component {
	render() {
		return(
			<nav>
				{
					links && links.map((link, index) => {
						return <a href={link.href} key={index}>{link.displayText}</a>
					})
				}
			</nav>
		)
	}
}

export default Navigation;