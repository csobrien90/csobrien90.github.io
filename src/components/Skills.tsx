import skills from '../data/skills.json';

const Skills = (): JSX.Element => {
	return(
		<article className='skills backgroundBox'>
			<h3>Skills</h3>
			<ul>
				{skills.map((skill, index) => {
					return (
						<li className='backgroundBox' key={index}>
							<img src={skill.imageSrc} alt={skill.imageAlt}></img>
							<p>{skill.text}</p>
						</li>
					)
				})}
			</ul>
		</article>
	)
}

export default Skills;