import React from 'react';
import Slider from './Slider';

class Experience extends React.Component {
    render() {
        return(
            <section  id="experience">
				<h2 className='sr-only'>Experience</h2>
				<Slider />
            </section>
        )
    }
}

export default Experience;