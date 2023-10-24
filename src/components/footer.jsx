import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {settings} from "../config";

const Footer = () => {
    return (
        <footer className="bg-white">

            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <Container className="px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                           href={settings.linkedinUrl} target="_blank">
                            Contact me
                        </a>
                    </div>
                </Container>
            </section>
            <Container id="contact" className="px-5 py-3">
                <Row className="align-items-center justify-content-between">
                    <Col>
                        <div className="small m-0">
                            Copyright &copy;
                            <a href={settings.websiteUrl} target="_blank">batuhanozturk.com</a>
                        </div>
                    </Col>
                    <Col className="text-end">
                        <a className="small" href="#!">Privacy</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="#!">Terms</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href={settings.linkedinUrl} target="_blank">Contact</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;