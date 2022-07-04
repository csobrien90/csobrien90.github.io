import React from 'react';


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			link: props.link,
			description: props.description
		}
	}

	//in the future, should probably improve "dangerouslySetInnerHTML" use (below) due to potential security risks

	render() {
		return(
			<div className='card'>
				<h4><a href={this.state.link} target="_blank">{this.state.title}</a></h4>
				<p dangerouslySetInnerHTML={{__html: this.state.description}} ></p>
			</div>
		)
	}
}

export default Card;