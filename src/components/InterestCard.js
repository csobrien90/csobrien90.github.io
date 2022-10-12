import React from 'react';
import LazyLoad from 'react-lazyload';

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
				<a className='h3Wrapper' href={this.state.link} target="_blank" rel="noreferrer" key={this.state.key}>
					<h3>{this.state.title}</h3>
					<LazyLoad offset={800}>
						<img className='backgroundImg' src={this.state.imageSrc} alt={this.state.imageAlt}></img>
					</LazyLoad>
				</a>
				<p>{this.state.description}</p>
			</article>
		)
	}
}

export default InterestCard;