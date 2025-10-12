const Lightbox = ({src, alt}: {src: string, alt: string}): JSX.Element => {

	const handleLightbox = (imgSrc: string) => {
		// Create and show a modal dialog with the screenshot
		const modal = document.createElement('dialog');
		modal.className = 'screenshot-modal';

		const img = document.createElement('img');
		img.src = imgSrc;

		modal.appendChild(img);
		document.body.appendChild(modal);

		modal.showModal();

		modal.addEventListener('close', () => {document.body.removeChild(modal)})
		modal.addEventListener('click', () => {modal.close()});
		modal.addEventListener('keydown', (e) => {
			if (['Escape','Enter',' '].includes(e.key)) modal.close()
		})
	}

	return <img
		className='lightbox'
		src={src}
		alt={alt}
		onClick={() => handleLightbox(src)}
	/>
}

export default Lightbox