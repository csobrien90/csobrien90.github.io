import Slider from './Slider';
import '../styles/experience.css';

const Experience = ():JSX.Element => {
	return(
		<section  id="experience">
			<h2 className='sr-only'>Experience</h2>
			<Slider />
		</section>
	)
}

export default Experience;