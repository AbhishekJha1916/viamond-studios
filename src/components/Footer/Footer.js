import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer">
                <h4>About Us</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maiores maxime dignissimos delectus
                    tempora<br />atque vero excepturi, nihil numquam molestiae doloribus quae eius nobis laboriosam,<br />
                    exercitationem consectetur praesentium ab! Ratione? </p>
                <div className="icons">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-youtube"></i>
                </div>
                <p></p>

                <p className="last">
                    <a href="/about">Viamond Studios © 2023</a>
                    <a href="/">Privacy & Legal</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;