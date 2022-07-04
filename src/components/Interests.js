import React from 'react';
import InterestCard from './InterestCard.js';
import interests from '../interests.json';

class Interests extends React.Component {
	render() {
		return(
			<section  id="interests">
				<h2 className='sr-only'>Interests</h2>
				{interests.map((interest, index) => {
					return <InterestCard title={interest.title} key={index} />
				})}
			</section>
		)
	}
}

export default Interests;