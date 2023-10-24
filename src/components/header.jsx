import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <header className="bg-light">
            <Navbar bg="light" data-bs-theme="light" className="justify-content-center fixed-top">
                <Nav>
                    <Nav.Link href="#about"><span>&middot;</span> About</Nav.Link>
                    <Nav.Link href="#projects"><span>&middot;</span> Projects</Nav.Link>
                    <Nav.Link href="#contact"><span>&middot;</span> Contact</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;