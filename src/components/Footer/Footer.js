import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <>
            <footer class="footer">
                <h4>About Us</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maiores maxime dignissimos delectus
                    tempora<br />atque vero excepturi, nihil numquam molestiae doloribus quae eius nobis laboriosam,<br />
                    exercitationem consectetur praesentium ab! Ratione? </p>
                <div class="icons">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-youtube"></i>
                </div>
                <p></p>

                <p class="last">
                    <a href="/about">Viamond Studios © 2023</a>
                    <a href="/">Privacy & Legal</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;