import React from 'react';
import Card from "./Card";
import cardData from "../cardData.json";

window.onload = () => {
	var cards = Array.from(document.getElementsByClassName("card"));
	cards[0].className = 'card prev';
	cards[1].className = 'card focus';
	cards[2].className = 'card next';
}

class Slider extends React.Component {
	
	next = () => {
		var cards = Array.from(document.getElementsByClassName("card"));
		
		if(cards[cards.length - 2].className === 'card focus') {
			return;
		}

		for(let i = 0; i < cards.length - 1; i++) {
			if (cards[i].className === "card focus") {
				cards[i].className = 'card prev';
				cards[i + 1].className = 'card focus';
				cards[i + 2].className = 'card next';
				return;
			};
		}           
	}
	
	prev = () => {
		var cards = Array.from(document.getElementsByClassName("card"));
		
		if(cards[1].className === 'card focus') {
			return;
		}

		for(let i = 1; i < cards.length; i++) {
			if (cards[i].className === "card focus") {
				cards[i + 1].className = 'card';
				cards[i].className = 'card next';
				cards[i - 1].className = 'card focus';
				cards[i - 2].className = 'card prev';
				return;
			};
		}

	}
	
	render() {
		return(
			<div className="projects">
				<h3>Projects</h3>
				<button onClick={this.prev}>Previous Project</button>
				<article id="project-slider">
					<div className="slider-cover"></div>
					{cardData && cardData.map((card) => {
						return <Card title={card.title} description={card.description} link={card.link} key={card.title.replaceAll(' ', '')} />
					})}
				</article>
				<button onClick={this.next}>Next Project</button>
			</div>
		)
	}
}

export default Slider;