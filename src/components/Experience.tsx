import '../styles/experience.css';
import BandBookFeature from './BandBookFeature';
import OtherProjects from './OtherProjects';

const Experience = ():JSX.Element => {
	return (
		<section  id="experience">
			<h2 className='sr-only'>My Work</h2>
			<BandBookFeature />
			<OtherProjects />
		</section>
	)
}

export default Experience;