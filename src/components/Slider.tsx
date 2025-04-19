import Card from './Card';
import cardData from '../data/cardData.json';

const Slider = () => {

  return (
	<div className="projects">
		<h3>Selected Projects</h3>
		<article id="project-slider">
			{cardData && cardData.map((card, index) => (
				<Card
					title={card.title}
					description={card.description}
					githubLink={card.githubLink}
					prodLink={card.prodLink}
					key={index}
				/>
			))}
		</article>
	</div>
  );
};


export default Slider;