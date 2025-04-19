import { InterestCardProps } from "@/types";

const InterestCard = ({data}: InterestCardProps): JSX.Element => {
	const { title, description, imageSrc, imageAlt, link } = data;
	const img = require(`../images/${imageSrc}`) as string; // Import the image dynamically

	return (
		<article className='interestCard backgroundBox'>
			<a className='h3Wrapper' href={link} target="_blank" rel="noreferrer">
				<h3>{title}</h3>
				<img className='backgroundImg' src={img} alt={imageAlt}></img>
			</a>
			<p>{description}</p>
		</article>
	)
}

export default InterestCard;