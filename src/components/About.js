import React from 'react';
import headshot from '../media/headshot.jpg';

class About extends React.Component {
	render() {

		const divArr = [];
		for (let i = 0; i < 25; i++ ) divArr.push(i);

		return(
			<section className="about" id="about">
				<div className='imgWrapper'>
					<img src={headshot} alt="a headshot of Chad O'Brien dressed in a suit"></img>
					<div className='imgBorderWrapper'>
						{divArr.map(boxNum => <div className='imgBorderBox' key={boxNum}></div>)}
					</div>
				</div>
				<h1>Chad O'Brien</h1>
				<p>Chad O'Brien is a full stack developer as well as a freelance musician based in Louisville, Kentucky. Among his many passions are web development, 
					playing, teaching, and writing music, urban farming, and social justice activism. He is currently a web developer for Kentucky Educational Television, 
					Operations Manager for the Louisville Jazz Initiative, and a mentor with Code Louisville. You can get to know Chad better by checking out the projects 
					above or <a href="mailto:obrien.music@gmail.com" target="_blank">emailing him</a>.
				</p>
			</section>
		)
	}
}

export default About;