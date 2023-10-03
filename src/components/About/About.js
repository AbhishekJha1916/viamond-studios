import React from 'react'
import './About.scss'

import subHeader from '../Images/about.jpg'

const About = () => {
    return (
        <>
            <section className="sub-header">
                <h1>About Us</h1>
            </section>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We Are Your Future Catalyst</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam autem odio quisquam delectus, quae
                           voluptate!<br/> Doloremque dolor in iusto quos facere, velit aperiam quia dolorem animi ad rerum iure
                           sit? Omnis minus accusamus dolore eos laudantium deserunt <br/> quam ea praesentium necessitatibus
                           tempore architecto assumenda ullam atque consequatur, vel iste error.
                        </p>
                        <a href="/services" className="btn">EXPLORE NOW</a>
                    </div>
                    <div className="about-col">
                        <img src={subHeader} alt="img"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
