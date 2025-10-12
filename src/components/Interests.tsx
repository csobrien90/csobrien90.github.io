import InterestCard from './InterestCard';
import { Interest } from '@/types';
import '../styles/interests.css';

const interests: Interest[] = [
	{
		title: "Music",
		description: "Before transitioning to a career in web development, I was a full time freelance musician. I'm still a very active player, composer, and teacher, with the Louisville Jazz Initiative, Bad Ass Brass, and my new band New Gunk. Check out the New Gunk site to hear some of my most recent music!",
		imageSrc: "music.webp",
		imageAlt: "Chad, in an eccentric sci-fi costume and full length black cloak, playing with a saxophonist and drummer in the band New Gunk.",
		link: "https://newgunk.com"
	},
	{
		title: "Louisville Jazz Initiative",
		description: "I am a cofounder of the Louisville Jazz Initiative, a diverse, intergenerational coalition of Louisville jazz artists and educators dedicated to culturally authentic performing and teaching of the Black American music, Jazz. Check out our site for media, information, and details on upcoming shows.",
		imageSrc: "louisville-jazz-initiative.webp",
		imageAlt: "Four jazz musicians, founding members of the Louisville Jazz Initiative, standing on the bank of the Ohio River with the Louisville skyline in the background",
		link: "https://louisvillejazzinitiative.com"
	},
	{
		title: "Code Louisville",
		description: "Code Louisville is a free coding bootcamp that I utilized to guide my transition into a life as a developer. I enrolled in my first class in May 2021 and had my first job in the industry just five months later - now, I am a Code Louisville mentor. Needless to say, I really believe in this program!",
		imageSrc: "code-louisville.webp",
		imageAlt: "A stock image of computer code, specifically a JavaScript React component",
		link: "https://codelouisville.org"
	},
	{
		title: "Urban Farming",
		description: "I try to minimize my footprint and live a self-sustaining lifestyle. In that pursuit, I've built quite the urban farm: 800 sqft of growing space, a greenhouse, rain water collection, and many pets and livestock. I also volunteer with Louisville Grows, a non-profit working to improve Lousiville's canopy.",
		imageSrc: "garden.webp",
		imageAlt: "Chad's backyard, featuring raised garden beds, a chicken run, a shed, and his dog, Buttercup",
		link: "https://louisvillegrows.org/"
	},
	{
		title: "Mutual Aid Organizations",
		description: "Especially since the COVID-19 pandemic began, Louisville has seen an exciting increase in the number of mutual aid networks. Organizations like Change Today Change Tomorrow and Louisville Community Grocery are fighting for intersectional social justice - and I am happy to help in any way I can!",
		imageSrc: "mutual-aid.webp",
		imageAlt: "The food pantry of Change Today Change Tomorrow, a non-profit working to feed hungry families and bring food justice to Louisville",
		link: "https://louisvillecommunitygrocery.com/"
	},
	{
		title: "Kitty With A Cupcake",
		description: "My wife, Emily, is extremely talented! She designs cute enamel pins and other accessories, creates knitting patterns, and is a prolific digital content creator and influencer. Visit her site to see her adorable work - and to check out its Shopify theme, customized by me!",
		imageSrc: "kitty.webp",
		imageAlt: "Enamel pins from Kitty With A Cupcake's witchy merit badge series",
		link: "https://kittywithacupcake.com"
	}
]

const Interests = () => {
	// Randomize order of interests
	const shuffleArray = (array: Interest[]): void => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	shuffleArray(interests);

	return(
		<section  id="interests">
			<h2 className='sr-only'>Interests</h2>
			{interests.map((interest, index) => {
				return <InterestCard 
					data={interest}
					key={index} 
				/>
			})}
		</section>
	)
}

export default Interests;