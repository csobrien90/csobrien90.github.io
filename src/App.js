import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import About from './components/Footer';

class App extends React.Component {

    render() {
        return(
            <main>
                <header>
                    <Header />
                </header>
                <section>
                    <h2>My Projects</h2>
                    <Slider />
                </section>
                <section>
                    <About />
                </section>
                <footer>
                    <Footer />
                </footer>
            </main>
        )
    }
}

export default App;