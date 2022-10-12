import React from 'react';
import GitHubIcon from '../media/GitHub_icon.webp';
import ProdIcon from '../media/Prod_icon.webp';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			githubLink: props.githubLink,
			prodLink: props.prodLink,
			description: props.description,
			index: props.index,
			focusedCard: props.focusedCard
		}
	}

	render() {
		let classes = this.state.focusedCard === this.state.index ? 'card focus' : 'card';
		return(
			<div className={classes}>
				{this.state.index === 0 ? <h3>{this.state.title}</h3> : <h4>{this.state.title}</h4>}
				{this.state.description && <p>{this.state.description}</p>}
				<div className='imgWrapper'>
					{this.state.githubLink && <a href={this.state.githubLink} target="_blank" rel="noreferrer" title='This repo on GitHub'><img src={GitHubIcon} alt='the GitHub logo'></img></a>}
					{this.state.prodLink && <a href={this.state.prodLink} target="_blank" rel="noreferrer" title='This project in action'><img src={ProdIcon} alt='World Wide Web icon'></img></a>}
				</div>
			</div>
		)
	}
}

export default Card;