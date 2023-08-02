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
      <div class="text-box">
        <div className="container">
          <img className="homeLogo" src={HLogo} alt="Logo" />
          <h1>Welcome To Viamond Studios</h1>
          <p>We Believe in the Power of Imagination</p>
          <a href="/about" class="hero-btn">Learn More</a>
        </div>
      </div>

      {/* Products */}
      <section class="products">
        <h1>Our Products</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quis laborum consequatur<br/> eligendi, hic
          reiciendis dolorem odit beatae? Assumenda, quos.</p>
        <div class="row">
          <div class="product-col">
            <img src={product1} alt="img"/>
              <div class="layer">
                <h3>PRODUCT 1</h3>
              </div>
          </div>
          <div class="product-col">
            <img src={product2}alt="img"/>
              <div class="layer">
                <h3>PRODUCT 2</h3>
              </div>
          </div>
          <div class="product-col">
            <img src={product3} alt="img"/>
              <div class="layer">
                <h3>PRODUCT 3</h3>
              </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section class="services">
        <h1>Services We Provide</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias pariatur porro<br /> rem inventore atque
          exercitationem laborum quos quibusdam earum.
        </p>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-12">
              <div class="card text-center">
                <div class="card-header">Basic</div>
                <div class="card-body">
                  <li>
                    $ <span class="money">20</span>/project
                  </li>
                  <li>Responsive Website</li>
                  <li>Free Domain Name</li>
                  <li>Mobile Phone Friendly</li>
                  <li>Project Guide</li>
                  <li>Customer Support 24/7</li>
                </div>
                <div class="card-footer">
                  <a href="/">Purchase</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class="card text-center">
                <div class="card-header">Classic</div>
                <div class="card-body">
                  <li>
                    $ <span class="money">40</span>/project
                  </li>
                  <li>Responsive Website</li>
                  <li>Free Domain Name</li>
                  <li>Mobile Phone Friendly</li>
                  <li>Project Guide</li>
                  <li>Customer Support 24/7</li>
                </div>
                <div class="card-footer">
                  <a href="/">Purchase</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class="card text-center">
                <div class="card-header">Premium</div>
                <div class="card-body">
                  <li>
                    $ <span class="money">60</span>/project
                  </li>
                  <li>Responsive Website</li>
                  <li>Free Domain Name</li>
                  <li>Mobile Phone Friendly</li>
                  <li>Project Guide</li>
                  <li>Customer Support 24/7</li>
                </div>
                <div class="card-footer">
                  <a href="/">Purchase</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section class="testimonial">
        <h1>What Our Customers Say</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div class="row">
          <div class="testimonial-col">
            <img src={UserTest} alt="img"/>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam a molestiae eveniet
                  perferendis, exercitationem officia corporis autem eaque omnis asperiores assumenda hic doloribus
                  vel at, numquam placeat repellendus. Sint?</p>
                <h3>Christine Berkley</h3>
                <span class="starRate material-symbols-rounded">star</span>
                <span class="starRate material-symbols-rounded">star</span>
                <span class="starRate material-symbols-rounded">star</span>
                <span class="starRate material-symbols-rounded">star</span>
                <span class="starRate material-symbols-rounded">star</span>
              </div>
          </div>
          <div class="testimonial-col">
            <img src={UserTest} alt="img"/>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam a molestiae eveniet
                  perferendis, exercitationem officia corporis autem eaque omnis asperiores assumenda hic doloribus
                  vel at, numquam placeat repellendus. Sint?</p>
                <h3>David Byer</h3>
                <span class="starRate material-symbols-rounded">star</span>
                <span class="starRate material-symbols-rounded">star</span>
                <span class="starRate material-symbols-rounded">star</span>
              </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="cta">
        <h1>Buy Our Products<br/> From Anywhere</h1>
        <a href="/contact" class="hero-btn">CONTACT US</a>
      </section>

      <Footer/>
    </>
  );
}

export default App;
