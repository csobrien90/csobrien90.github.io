import Project from './Project';
import WorkExperience from './WorkExperience';
import '../styles/experience.css';

import projects from '../data/projects.json';

const Experience = (): JSX.Element => {
	return(
		<section  id="experience">
			<h2 className='sr-only'>Experience</h2>
			{projects && projects.map((project, index) => <Project key={index} {...project} />)}
			<WorkExperience />
		</section>
	)
}

export default Experience;