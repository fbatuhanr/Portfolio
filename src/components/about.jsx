import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {settings} from "../config";

const About = () => {
    return (
        <section id="about" className="bg-light py-5">
            <Container className="pt-1 px-5">
                <Row className="gx-5 justify-content-center">
                    <Col xs={10} md={8}>
                        <div className="text-center mt-3 mb-5">
                            <h2 className="display-5 fw-bolder">
                                <span className="text-gradient d-inline">Batuhan Ozturk</span>
                            </h2>
                            <p className="lead fw-light mb-4">
                                WEB Developer
                            </p>
                            <p className="text-muted">
                            Eager to apply my dynamic skill set to contribute effectively to innovative web development projects. 
                            Strong in problem solving and trying to put what he has learned into practice.
                            </p>

                            <div className="d-flex justify-content-center fs-2 gap-4">
                                <a href={settings.linkedinUrl} target="_blank">
                                    <AiFillLinkedin size="1.75em" />
                                </a>
                                <a href={settings.githubUrl} target="_blank">
                                    <AiFillGithub size="1.75em" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;