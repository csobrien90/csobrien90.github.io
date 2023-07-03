import headshot from '../media/headshot.webp';

const About = (): JSX.Element => {
	const divArr = [];
	for (let i = 0; i < 25; i++ ) divArr.push(i);

	return(
		<section className="about" id="about">
			<div className='imgWrapper'>
				<img src={headshot} alt="a headshot of Chad O'Brien dressed in a colorful, patterned shirt"></img>
				<div className='imgBorderWrapper'>
					{divArr.map(boxNum => <div className='imgBorderBox' key={boxNum}></div>)}
				</div>
			</div>
			<h1>Chad O'Brien</h1>
			<p>Hi! I'm a full stack JavaScript developer and freelance musician based in Louisville, Kentucky. I currently work as a web developer for Kentucky Educational Television, Operations Manager for the Louisville Jazz Initiative, and a mentor with Code Louisville.
			</p>
		</section>
	)
}

export default About;