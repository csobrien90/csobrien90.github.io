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
						return <li key={index}>
							<h4>{job.title}</h4>
							{job.company && <p className='company'>{job.company}</p>}
							<p className='workExperienceDates'>{job.time}</p>
							<ul className='workExperienceDescription'>
								{job.description.map((duty, index) => {
									return <li key={index}>{duty}</li>;
								})}
							</ul>
						</li>
					})
				}
				</ul>
			</article>
		)
	}
}

export default WorkExperience;