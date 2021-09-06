import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='card'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        )
    }
}

export default Card;