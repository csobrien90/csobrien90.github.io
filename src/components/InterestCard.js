import React from 'react';


class InterestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
			key: props.key
        }
    }

    //in the future, should probably improve "dangerouslySetInnerHTML" use (below) due to potential security risks

    render() {
        return(
            <article className='interestCard' key={this.state.key}>
				<h4>{this.state.title}</h4>
			</article>
        )
    }
}

export default InterestCard;