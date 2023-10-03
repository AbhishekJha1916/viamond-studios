import React from 'react'
import './Services.scss'

import abstractWeb from '../Images/abstract-web.jpg';
import abstractCat from '../Images/abstract-cat.jpg';
import abstractPos from '../Images/abstract-pos.jpg';
import abstractBus from '../Images/abstract-bus.jpg';

const Services = () => {
    return (
        <>
            <section className="sub-header">
                <h1>Services</h1>
            </section>
            <section className="services">
                <h1>Services We Provide</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias pariatur porro<br /> rem inventore atque
                    exercitationem laborum quos quibusdam earum.
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="card text-center">
                                <div className="card-header">Basic</div>
                                <div className="card-body">
                                    <li>
                                        $ <span className="money">20</span>/project
                                    </li>
                                    <li>Responsive Website</li>
                                    <li>Free Domain Name</li>
                                    <li>Mobile Phone Friendly</li>
                                    <li>Project Guide</li>
                                    <li>Customer Support 24/7</li>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Purchase</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="card text-center">
                                <div className="card-header">Classic</div>
                                <div className="card-body">
                                    <li>
                                        $ <span className="money">40</span>/project
                                    </li>
                                    <li>Responsive Website</li>
                                    <li>Free Domain Name</li>
                                    <li>Mobile Phone Friendly</li>
                                    <li>Project Guide</li>
                                    <li>Customer Support 24/7</li>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Purchase</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="card text-center">
                                <div className="card-header">Premium</div>
                                <div className="card-body">
                                    <li>
                                        $ <span className="money">60</span>/project
                                    </li>
                                    <li>Responsive Website</li>
                                    <li>Free Domain Name</li>
                                    <li>Mobile Phone Friendly</li>
                                    <li>Project Guide</li>
                                    <li>Customer Support 24/7</li>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <h1>Facalities We Provide</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deserunt similique vero,<br/> cumque expedita commodi
                    quisquam rerum reiciendis molestias sunt.</p>

                <div className="row1">
                    <div className="team-col">
                        <img src={abstractWeb} alt='img'/>
                            <h3>Website Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</p>
                    </div>
                    <div className="team-col">
                        <img src={abstractCat} alt='img'/>
                            <h3>Catalogue Designing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</p>
                    </div>
                </div>
                <div className="row2">
                    <div className="team-col">
                        <img src={abstractBus} alt='img'/>
                            <h3>Business Consultancy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</p>
                    </div>
                    <div className="team-col">
                        <img src={abstractPos} alt='img'/>
                            <h3>Posters & Posts Designing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services;