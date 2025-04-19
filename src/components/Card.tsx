import GitHubIcon from '../media/GitHub_icon.webp';
import ProdIcon from '../media/Prod_icon.webp';
	
interface CardProps {
  title: string;
  description?: string;
  githubLink?: string;
  prodLink?: string;
}

const Card = ({ title, description, githubLink, prodLink }: CardProps) => {

  return (
	<div className="card backgroundBox">
		<h4>{title}</h4>
	  {description && <p>{description}</p>}
	  <div className='linkWrapper'>
		{githubLink && (
		  <a href={githubLink} target="_blank" rel="noreferrer" title='This repo on GitHub'>
			<img src={GitHubIcon} alt='the GitHub logo' />
		  </a>
		)}
		{prodLink && (
		  <a href={prodLink} target="_blank" rel="noreferrer" title='This project in action'>
			<img src={ProdIcon} alt='World Wide Web icon' />
		  </a>
		)}
	  </div>
	</div>
  );
};

export default Card;