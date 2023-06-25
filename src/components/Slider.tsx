// import Card from "./Card";
// import cardData from "../data/cardData.json";

// const Slider = () => {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			focusedCard: 0
// 		}
// 	}

// 	const next = () => {
// 		if ( this.state.focusedCard === cardData.length - 1 ) return;
// 		this.setState({focusedCard: ++this.state.focusedCard});
// 		document.querySelector('.focus').classList.remove('focus');
// 		document.querySelectorAll('.card')[this.state.focusedCard].classList.add('focus');
// 		document.querySelector('.focus').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
// 	}

// 	const prev = () => {
// 		if ( this.state.focusedCard === 0 ) return;
// 		this.setState({focusedCard: --this.state.focusedCard});
// 		document.querySelector('.focus').classList.remove('focus');
// 		document.querySelectorAll('.card')[this.state.focusedCard].classList.add('focus');
// 		document.querySelector('.focus').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
// 	}

// 	return(
// 		<div className="projects">
// 			<button onClick={prev} title="Previous project"><i className='arrow left'></i></button>
// 			<article id="project-slider">
// 				{cardData && cardData.map((card, index) => {
// 					return <Card title={card.title} description={card.description} githubLink={card.githubLink} prodLink={card.prodLink} key={index} index={index} focusedCard={this.state.focusedCard} />
// 				})}
// 			</article>
// 			<button onClick={next} title="Next project"><i className='arrow right'></i></button>
// 		</div>
// 	)
// }

// export default Slider;