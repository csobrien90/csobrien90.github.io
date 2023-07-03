import { ProjectData } from '../types';
import Skills from './Skills';

const Project = ({ title, skills }: ProjectData):JSX.Element => {
	return (
		<article>
			<h3>{title}</h3>
			<Skills toShow={skills} />
		</article>
	)
}

export default Project;