import { useState } from 'react';
import bandbookScreenshot from '../images/bandbook.png';
import Lightbox from './Lightbox';

enum FeatureId {
	AudioPlayer = 'audio-player',
	LocalFirstPWA = 'local-first-pwa',
	UXUIPersonalization = 'ux-ui-personalization',
	ProjectManagement = 'project-management'
}

const features: Record<FeatureId, { title: string; description: string }> = {
	[FeatureId.AudioPlayer]: {
		title: 'Custom Audio Player',
		description: 'Using the Web Audio APIs, the custom player generates waveforms and offers customizable controls for speed and scrubbing. Users can add metadata to uploaded songs including marking any number of timestamps. These markers also hold metadata and can be used to create segments for looping and basic audio editing (e.g. trimming).'
	},
	[FeatureId.LocalFirstPWA]: {
		title: 'Local First Progressive Web Application',
		description: 'BandBook was designed for musicians on the go. Data is stored locally and all core features are fully functional without an internet connection. Beyond this, the app is configured for seamless integration with third party apps (Google Drive, Dropbox, etc.) on mobile. Web Workers support these near-native mobile tie-ins, and also handle heavier audio processing. The effect of all this? A lightning fast application with immediate response — anywhere, on any device.'
	},
	[FeatureId.UXUIPersonalization]: {
		title: 'Personalization',
		description: 'BandBook is very customizable. On the surface, light and dark mode allow users to select their UI color theme preference. Deeper than this visual feature, users can customize aspects of their player experience, such as the number of seconds scrubbed with skip buttons. The rare user experiencing increased latency (e.g. due to working with extremely large files or on an older device with limited capability) can turn on "performance mode" or configure specific settings to counter lag.'
	},
	[FeatureId.ProjectManagement]: {
		title: 'Project/Product Management',
		description: 'I\'ve been designing and building the BandBook application on my own and decided to do so totally in public. Not only is the full respository history available on GitHub, but the project has robust documentation (a GitHub Wiki) and full project management via GitHub Issues. Part of this effort is maintaining a traditional Changelog as well, which I use to fuel a version management and release system that even allows users to opt in to experimental features ahead of major releases.'
	}
};

const BandBookFeature = (): JSX.Element => {
	const [openFeature, setOpenFeature] = useState<FeatureId | null>(FeatureId.AudioPlayer);

	return (
		<article className='bandbook backgroundBox'>
			<header>
				<h3>BandBook</h3>
				<p>Tools to help musicians learn songs by ear, transcribe, practice, study, and share and collaborate with others.</p>
				<Lightbox
					src={bandbookScreenshot}
					alt='A screenshot of the Bandbook interface'
				/>
			</header>
			<div className="content">
				<ul className="features">
					<h4>Key Features</h4>
					{Object.entries(features).map(([id, { title, description }]) => {
						const isOpen = openFeature === id;
						return (
							<li key={id}>
								<details
									key={id}
									open={isOpen}
									onClick={(e) => {
										e.preventDefault()
										setOpenFeature(id as FeatureId)
									}}
								>
									<summary>{title}</summary>
									<p>{description}</p>
								</details>
							</li>
						);
					})}
				</ul>
				<div className="technical">
					<h4>Technical Approach</h4>
					<p>In this project, I made a zealous commitment to modern web standards. The stack is comprised of exclusively modern vanilla HTML5, CSS3, and JavaScript (ES6+). All JavaScript is written in an Object-Oriented Programming (OOP) style and type safety is enforced through JSDoc comments. The application is local first and uses IndexedDB for data storage.</p>
				</div>
			</div>
		</article>
	)
}

export default BandBookFeature
