import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section className="sub-header">
                <h1>Contact</h1>
            </section>
            <section class="location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.30415009515!2d77.26580221633914!3d23.199663281474713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1642401235046!5m2!1sen!2sin"
                    width="600" height="450" allowfullscreen="" loading="lazy" title='location'></iframe>
            </section>

            <section class="contact-us">
                <div class="row">
                    <div class="contact-col">
                        <div>
                            <i class="bi bi-house"></i>
                            <span>
                                <h5>XYZ Road, ABC Building</h5>
                                <p>Bhopal, Madhya Pradesh, IN</p>
                            </span>
                        </div>
                        <div>
                            <i class="bi bi-phone"></i>
                            <span>
                                <h5>+91 90XXXXXX49</h5>
                                <p>Monday to Saturday, 10AM to 6PM</p>
                            </span>
                        </div>
                        <div>
                            <i class="bi bi-envelope"></i>
                            <span>
                                <h5>services.viamond@gmail.com</h5>
                                <p>Email us your query</p>
                            </span>
                        </div>
                    </div>
                    <div class="contact-col">
                        <form action="form-handler.php" method="post">
                            <input type="text" name="name" placeholder="Enter Name"/>
                            <input type="email" name="email" placeholder="Enter Email"/>
                            <input type="text" name="subject" placeholder="Enter Subject"/>
                            <textarea rows="8" name="message" placeholder="Your Query"></textarea>
                            <button type="submit" class="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;