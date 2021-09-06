import React from 'react';
import Card from "./Card";
import cardData from "../cardData";

class Slider extends React.Component {
    render() {
        return(
            <section>
                <h2>My Projects</h2>
                <article id="project-slider">
                    {cardData && cardData.map((card) => {
                        return <Card title={card.title} description={card.description} link={card.link}/>
                    })}
                </article>
            </section>
        )
    }
}

export default Slider;