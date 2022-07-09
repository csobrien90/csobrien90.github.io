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
				<header className='h3Wrapper'>
					<h3>{this.state.title}</h3>
					<img className='backgroundImg' src={this.state.imageSrc} alt={this.state.imageAlt}></img>
				</header>
				{/* <a href={this.state.link} target="_blank" key={this.state.key}></a> */}
				<p>{this.state.description}</p>
			</article>
		)
	}
}

export default InterestCard;