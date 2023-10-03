const EggCounter = () => {
	// Get found eggs array from local storage
	const foundEggsArr = localStorage.getItem('foundEggs')
	
	// If no eggs have been found, set foundEggs to 0
	let foundEggs = 0
	if (foundEggsArr) {
		foundEggs = JSON.parse(foundEggsArr).length
	}

	return (
		<div id="egg-counter">
			<p>You've found <strong>{foundEggs}</strong> of the <strong>5</strong> Easter eggs!</p>
		</div>
	)
}

export default EggCounter