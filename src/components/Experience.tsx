import '../styles/experience.css';
import Click2Read from './projects/Click2Read';
import KET from './projects/KET';
import Portfolio from './projects/Portfolio';
import ShowsInTown from './projects/ShowsInTown';

const Experience = (): JSX.Element => {
	return(
		<section  id="experience">
			<h2 className='sr-only'>Experience</h2>
			<ShowsInTown />
			<Click2Read />
			<Portfolio />
			<KET />
		</section>
	)
}

export default Experience;