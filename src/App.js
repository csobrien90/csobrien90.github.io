import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Connect from './components/Connect';

class App extends React.Component {

	render() {
		return(
			<main>
				<About />
				<Experience />
				<Interests />
				<Connect />
			</main>
		)
	}
}

export default App;