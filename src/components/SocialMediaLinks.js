import React from 'react';
import linkedInIcon from '../media/linkedinicon.png';
import instagramIcon from '../media/instagramicon.png';
import facebookIcon from '../media/facebookicon.png';

class SocialMediaLinks extends React.Component {    
	render() {
		return(
			<nav className='socialMediaLinks'>
				<a href='https://www.linkedin.com/in/chad-o-brien-42a410215/' target='_blank' title='LinkedIn'><img src={linkedInIcon} alt="linkedin logo" className='socialMediaIcon' /></a>
				<a href='https://www.instagram.com/obrientrombone/' target='_blank' title='Instagram'><img src={instagramIcon} alt="instagram logo" className='socialMediaIcon' /></a>
				<a href='https://www.facebook.com/chad.s.obrien' target='_blank' title='Facebook'><img src={facebookIcon} alt="facebook logo" className='socialMediaIcon' /></a>
			</nav>
		)
    }
}

export default SocialMediaLinks;