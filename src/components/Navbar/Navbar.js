import React from 'react';
import './Navbar.scss';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">VIAMOND</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Contact Us</a>
                            </li>
                        </ul>
                        <button class="btn btn-outline-success" type="submit">Sign In</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;