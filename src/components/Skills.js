import React from 'react';
import skills from '../skills.json';
import LazyLoad from 'react-lazyload';

class Skills extends React.Component {
	render() {
		return(
			<article className='skills backgroundBox'>
				<h3>Skills</h3>
				<ul>
					{skills.map((skill, index) => {
						return (
							<li className='backgroundBox' key={index}>
								<LazyLoad offset={400}>
									<img src={skill.imageSrc} alt={skill.imageAlt}></img>
								</LazyLoad>
								<p>{skill.text}</p>
							</li>
						)
					})}
				</ul>
			</article>
		)
	}
}

export default Skills;