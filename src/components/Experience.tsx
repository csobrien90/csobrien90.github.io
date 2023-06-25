// import Slider from './Slider';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

const Experience = ():JSX.Element => {
	return(
		<section  id="experience">
			<h2 className='sr-only'>Experience</h2>
			{/* <Slider /> */}
			<Skills />
			<WorkExperience />
		</section>
	)
}

export default Experience;