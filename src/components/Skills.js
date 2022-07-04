import React from 'react';
import skills from '../skills.json';

class Skills extends React.Component {
	render() {
		return(
			<article className='skills'>
				<h3>Skills</h3>
				<ul>
					{skills.map((skill, index) => {
						return <li key={index}>{skill}</li>
					})}
				</ul>
			</article>
		)
	}
}

export default Skills;