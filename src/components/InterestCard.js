import React from 'react';

class InterestCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			description: props.description,
			imageSrc: props.imageSrc,
			imageAlt: props.imageAlt,
			link: props.link,
			key: props.key
		}
	}

	render() {
		return(
			<a href={this.state.link} target="_blank" className='interestCard backgroundBox' key={this.state.key}>
				<h3>{this.state.title}</h3>
				<img src={this.state.imageSrc} alt={this.state.imageAlt}></img>
				<p>{this.state.description}</p>
			</a>
		)
	}
}

export default InterestCard;