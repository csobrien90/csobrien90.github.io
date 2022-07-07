import React from 'react';
import InterestCard from './InterestCard.js';
import interests from '../interests.json';

class Interests extends React.Component {
	render() {

		// Randomize order of interests
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
		shuffleArray(interests);

		return(
			<section  id="interests">
				<h2 className='sr-only'>Interests</h2>
				{interests.map((interest, index) => {
					return <InterestCard 
						title={interest.title} 
						description={interest.description} 
						imageSrc={interest.imageSrc} 
						imageAlt={interest.imageAlt} 
						link={interest.link} 
						key={index} 
					/>
				})}
			</section>
		)
	}
}

export default Interests;