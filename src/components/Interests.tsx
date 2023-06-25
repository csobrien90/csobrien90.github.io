import InterestCard from './InterestCard';
import interests from '../data/interests.json';
import { Interest } from '@/types';

const Interests = () => {
	// Randomize order of interests
	const shuffleArray = (array: Interest[]): void => {
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
					data={interest}
					key={index} 
				/>
			})}
		</section>
	)
}

export default Interests;