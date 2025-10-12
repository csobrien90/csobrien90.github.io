// import template components
import Navigation from "./components/Navigation"
import About from "./components/About"
import Experience from "./components/Experience"
import Interests from "./components/Interests"
import Connect from "./components/Connect"

// import functions


// import styles
import "./index.css"

// import types


const App = (): JSX.Element => {
	return (
		<main>
			<Navigation />
			<About />
			<Experience />
			<Interests />
			<Connect />
			<a href="#top" id='topLink'>Top ↑</a>
		</main>
	)
}

export default App