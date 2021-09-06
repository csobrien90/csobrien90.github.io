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

    render() {
        return(
            <div className='card'>
                <h3><a href={this.state.link} target="_blank">{this.state.title}</a></h3>
                {this.state.description}
            </div>
        )
    }
}

export default Card;