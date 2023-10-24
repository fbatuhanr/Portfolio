import React from 'react';

const Header = () => {
    return (
        <header className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;