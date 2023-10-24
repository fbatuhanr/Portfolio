import React from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {TbWorldWww} from "react-icons/tb";
import {AiFillGithub} from "react-icons/ai";

import rentacarImg from "../assets/projects/rentacar.jpg"
import shoppingcartImg from "../assets/projects/shoppingcart.jpg"


const projectsData = [
    {
        title: "Rent a Car",
        description: "Car rental website created by React",
        image: rentacarImg,
        liveDemo: "https://rent-a-car-reactjs.vercel.app",
        sourceCode: "https://github.com/fbatuhanr/RentaCar-ReactJS"
    },
    {
        title: "Shopping Cart",
        description: "Shopping Cart is E-commerce website application created by React",
        image: shoppingcartImg,
        liveDemo: "https://shopping-cart-reactjs-seven.vercel.app/",
        sourceCode: "https://github.com/fbatuhanr/shoppingcart-reactjs"
    }
]

const Projects = () => {
    return (
        <section id="projects" className="py-5">
            <Container className="px-3 px-md-5 mb-4">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0">
                        <span className="text-gradient d-inline">Projects</span>
                    </h1>
                </div>
                <Row className="gx-5 justify-content-center">
                    {
                        projectsData.map(data =>

                            <Col xs={12} md={12} lg={9}>
                                <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
                                    <Card.Body className="card-body">
                                        <Row>
                                            <Col xs={9} className="px-3 px-md-5 py-3 py-md-5">
                                                <h2 className="fw-bolder">
                                                    {data.title}
                                                </h2>
                                                <p className="mt-3 mb-4">
                                                    {data.description}
                                                </p>
                                                <div>
                                                    <a href={data.liveDemo} target="_blank">
                                                        <Button variant="dark"><TbWorldWww /> Live Demo</Button>
                                                    </a>
                                                    <a href={data.sourceCode} target="_blank">
                                                        <Button variant="light"><AiFillGithub /> Source Code</Button>
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col xs={3}>
                                                <img src={data.image} className="img-fluid rounded" />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Projects;