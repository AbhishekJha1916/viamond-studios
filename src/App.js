import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.scss';
import HLogo from './components/Images/HomeLogo.png';
import product1 from './components/Images/post-1.jpg';
import product2 from './components/Images/post-2.jpg';
import product3 from './components/Images/post-3.jpg';
import UserTest from './components/Images/user.png';


function App() {
  return (
    <>
      <Navbar />
      <div className="text-box">
        <div className="container">
          <img className="homeLogo" src={HLogo} alt="Logo" />
          <h1>Welcome To Viamond Studios</h1>
          <p>We Believe in the Power of Imagination</p>
          <a href="/about" className="hero-btn">Learn More</a>
        </div>
      </div>

      {/* Products */}
      <section className="products">
        <h1>Our Products</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quis laborum consequatur<br/> eligendi, hic
          reiciendis dolorem odit beatae? Assumenda, quos.</p>
        <div className="row">
          <div className="product-col">
            <img src={product1} alt="img"/>
              <div className="layer">
                <h3>PRODUCT 1</h3>
              </div>
          </div>
          <div className="product-col">
            <img src={product2}alt="img"/>
              <div className="layer">
                <h3>PRODUCT 2</h3>
              </div>
          </div>
          <div className="product-col">
            <img src={product3} alt="img"/>
              <div className="layer">
                <h3>PRODUCT 3</h3>
              </div>
          </div>
        </div>
      </section>

      {/* Services */}
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

      {/* Testimonial */}
      <section className="testimonial">
        <h1>What Our Customers Say</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="row">
          <div className="testimonial-col">
            <img src={UserTest} alt="img"/>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam a molestiae eveniet
                  perferendis, exercitationem officia corporis autem eaque omnis asperiores assumenda hic doloribus
                  vel at, numquam placeat repellendus. Sint?</p>
                <h3>Christine Berkley</h3>
                <span className="starRate material-symbols-rounded">star</span>
                <span className="starRate material-symbols-rounded">star</span>
                <span className="starRate material-symbols-rounded">star</span>
                <span className="starRate material-symbols-rounded">star</span>
                <span className="starRate material-symbols-rounded">star</span>
              </div>
          </div>
          <div className="testimonial-col">
            <img src={UserTest} alt="img"/>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam a molestiae eveniet
                  perferendis, exercitationem officia corporis autem eaque omnis asperiores assumenda hic doloribus
                  vel at, numquam placeat repellendus. Sint?</p>
                <h3>David Byer</h3>
                <span className="starRate material-symbols-rounded">star</span>
                <span className="starRate material-symbols-rounded">star</span>
                <span className="starRate material-symbols-rounded">star</span>
              </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h1>Buy Our Products<br/> From Anywhere</h1>
        <a href="/contact" className="hero-btn">CONTACT US</a>
      </section>

      <Footer/>
    </>
  );
}

export default App;
