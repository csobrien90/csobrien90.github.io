import React from 'react';
import Card from "./Card";
import cardData from "../cardData";

window.onload = () => {
    var cards = Array.from(document.getElementsByClassName("card"));
    cards[0].className = 'card focus';
}


class Slider extends React.Component {
    
    next = () => {
        var cards = Array.from(document.getElementsByClassName("card"));
        
        if(cards[cards.length - 1].className === 'card focus') {
            return;
        }

        for(let i = 0; i < cards.length - 1; i++) {
            if (cards[i].className === "card focus") {
                cards[i].className = 'card';
                cards[i + 1].className = 'card focus';
                return;
            };
        }           
    }
    
    prev = () => {
        var cards = Array.from(document.getElementsByClassName("card"));
        
        if(cards[0].className === 'card focus') {
            return;
        }

        for(let i = 1; i < cards.length; i++) {
            if (cards[i].className === "card focus") {
                cards[i].className = 'card';
                cards[i - 1].className = 'card focus';
                return;
            };
        }

    }
    
    render() {
        return(
            <section>
                <h2>My Projects</h2>
                <article id="project-slider">
                    {cardData && cardData.map((card) => {
                        return <Card title={card.title} description={card.description} link={card.link}/>
                    })}
                </article>
                <button onClick={this.prev}>Previous</button>
                <button onClick={this.next}>Next</button>
            </section>
        )
    }
}

export default Slider;