import React from 'react';
import workExperience from '../workExperience.json';

class WorkExperience extends React.Component {
	render() {
		return(
			<article className='workExperience backgroundBox'>
				<h3>Dev Experience</h3>
				<ul>
				{
					workExperience.map((job, index) => {
						return <li key={index} className='backgroundBox'>
							<h4>{job.title}</h4>
							{job.company && <p className='company'>{job.company}</p>}
							<p className='workExperienceDates'>{job.time}</p>
							<p className='workExperienceDescription'>{job.description}</p>
						</li>
					})
				}
				</ul>
			</article>
		)
	}
}

export default WorkExperience;