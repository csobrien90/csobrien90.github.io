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
			<article className='interestCard backgroundBox' key={this.state.key}>
				<h3>{this.state.title}</h3>
				<a href={this.state.link} target="_blank" key={this.state.key}>
					<img src={this.state.imageSrc} alt={this.state.imageAlt}></img>
				</a>
				<p>{this.state.description}</p>
			</article>
		)
	}
}

export default InterestCard;