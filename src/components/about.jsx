import React from 'react';
import profileImg from "../images/BatuhanOzturk-CV-Photo.png";
import {Container, Row, Col} from "react-bootstrap";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const About = () => {
    return (
        <section className="bg-light py-5">
            <Container className="px-5">
                <Row className="gx-5 justify-content-center">
                    <Col xs={8}>
                        <div className="text-center my-5">
                            <h2 className="display-5 fw-bolder">
                                <span className="text-gradient d-inline">Batuhan Ozturk</span>
                            </h2>
                            <p className="lead fw-light mb-4">
                                WEB Developer
                            </p>
                            <p className="text-muted">
                                Highly skilled web developer with expertise in HTML, CSS, and Bootstrap, driving
                                visually captivating and user-centric designs.
                                Proficient in the previously outdated jQuery library, bringing a holistic approach
                                to web development.
                                Confident in JavaScript, adept at crafting efficient and dynamic applications
                                using React and Node.js.
                                Experienced in MongoDB and Mongoose for seamless database management.
                                Proven track record of creating and showcasing numerous projects on GitHub
                                and personal website.
                            </p>

                            <div className="d-flex justify-content-center fs-2 gap-4">
                                <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/-batuhan" target="_blank">
                                    <AiFillLinkedin size="2em" />
                                </a>
                                <a href="https://github.com/fbatuhanr" target="_blank">
                                    <AiFillGithub size="2em" />
                                </a>
                                <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;