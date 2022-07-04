import React from 'react';


class InterestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
			description: props.description,
			link: props.link,
			key: props.key
        }
    }

    //in the future, should probably improve "dangerouslySetInnerHTML" use (below) due to potential security risks

    render() {
        return(
            <article className='interestCard' key={this.state.key}>
				<a href={this.state.link} target="_blank">
					<h3>{this.state.title}</h3>
					<p>{this.state.description}</p>
				</a>
			</article>
        )
    }
}

export default InterestCard;