import React from 'react';
import Card from "./Card";
import cardData from "../cardData";

class Slider extends React.Component {
    render() {
        return(
            <article id="project-slider">
                {cardData && cardData.map((card) => {
                    return <Card title={card.title} description={card.description} />
                })}
            </article>
        )
    }
}

export default Slider;