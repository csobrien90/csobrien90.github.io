import React from 'react';
import workExperience from '../workExperience.json';

class WorkExperience extends React.Component {
	render() {
		return(
			<article className='workExperience'>
				<h3>Work Experience</h3>
				{
					workExperience.map((job, index) => {
						return <li key={index}>
							<h4>{job.title}</h4>
							{job.company && <p className='company'>{job.company}</p>}
							<p className='workExperienceDates'>{job.time}</p>
							<p className='workExperienceDescription'>{job.description}</p>
						</li>
					})
				}
			</article>
		)
	}
}

export default WorkExperience;