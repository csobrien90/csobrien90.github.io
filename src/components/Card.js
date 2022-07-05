import React from 'react';


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			githubLink: props.githubLink,
			prodLink: props.prodLink,
			description: props.description
		}
	}

	//in the future, should probably improve "dangerouslySetInnerHTML" use (below) due to potential security risks

	render() {
		return(
			<div className='card'>
				<h4>{this.state.title}</h4>
				{this.state.description && <p dangerouslySetInnerHTML={{__html: this.state.description}} ></p>}
				{this.state.githubLink && <a href={this.state.githubLink} target="_blank">GitHub</a>}
				{this.state.prodLink && <a href={this.state.prodLink} target="_blank">Application</a>}
			</div>
		)
	}
}

export default Card;