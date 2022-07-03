import React from 'react';
import headshot from '../media/headshot.jpg';

class About extends React.Component {
	render() {
		return(
			<section className="about">
				<header>
					<h1>Chad O'Brien</h1>
					<img src={headshot} alt="a headshot of Chad O'Brien dressed in a suit"></img>
				</header>
				<p>Chad O'Brien is a full stack developer as well as a freelance musician based in Louisville, Kentucky. Among his many passions are web development, 
					playing, teaching, and writing music, urban farming, and social justice activism. He is currently a web developer for Kentucky Educational Television, 
					Operations Manager for the Louisville Jazz Initiative, and a mentor with Code Louisville. You can get to know Chad better by checking out the projects 
					above or 
					<a href="mailto:obrien.music@gmail.com" target="_blank">emailing him</a>.
				</p>
			</section>
		)
	}
}

export default About;