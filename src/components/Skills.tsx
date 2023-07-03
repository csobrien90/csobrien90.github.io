import skills from '../data/skills.json';
import { SkillsProps } from '../types';

const Skills = ({ toShow }: SkillsProps): JSX.Element => {
	console.log(skills);
	return(
		<div className='skills backgroundBox'>
			<ul>
				{skills.filter((skill) => {
					return toShow.includes(skill.text);
				}).map((skill, index) => {
					return (
						<li className='backgroundBox' key={index}>
							<img src={skill.imageSrc} alt={skill.imageAlt}></img>
							<p>{skill.text}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Skills;