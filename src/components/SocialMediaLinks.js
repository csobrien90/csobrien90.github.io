import React from 'react';
import linkedInIcon from '../media/linkedinicon.webp';
import instagramIcon from '../media/instagramicon.webp';
import facebookIcon from '../media/facebookicon.webp';
import gitHubIcon from '../media/GitHub_icon.webp';

class SocialMediaLinks extends React.Component {    
	render() {
		return(
			<nav className='socialMediaLinks backgroundBox'>
				<a href='https://www.linkedin.com/in/chad-o-brien-42a410215/' target="_blank" rel="noreferrer" title='LinkedIn'><img src={linkedInIcon} alt="linkedin logo" className='socialMediaIcon' /></a>
				<a href='https://www.github.com/csobrien90' target="_blank" rel="noreferrer" title='GitHub'><img src={gitHubIcon} alt="GitHub logo" className='socialMediaIcon githubIcon' /></a>
				<a href='https://www.instagram.com/obrientrombone/' target="_blank" rel="noreferrer" title='Instagram'><img src={instagramIcon} alt="instagram logo" className='socialMediaIcon' /></a>
				<a href='https://www.facebook.com/chad.s.obrien' target="_blank" rel="noreferrer" title='Facebook'><img src={facebookIcon} alt="facebook logo" className='socialMediaIcon' /></a>
			</nav>
		)
	}
}

export default SocialMediaLinks;