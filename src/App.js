import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Footer from './components/Footer';

class App extends React.Component {

    render() {
        return(
            <main>
                <Header />
                <Slider />
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