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
        <main className="flex-shrink-0">
            <section className="py-5">
                <Container className="px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0">
                            <span className="text-gradient d-inline">Projects</span>
                        </h1>
                    </div>
                    <Row className="gx-5 justify-content-center">

                        {
                            projectsData.map(data =>

                                <Col lg={11} xl={9} xxl={8}>
                                    <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
                                        <Card.Body className="card-body">
                                            <Row>
                                                <Col xs={8} className="px-5 py-5">
                                                    <h2 className="fw-bolder">
                                                        {data.title}
                                                    </h2>
                                                    <div>
                                                        <p>
                                                            {data.description}
                                                        </p>
                                                        <a href={data.liveDemo} target="_blank">
                                                            <Button variant="dark"><TbWorldWww /> Live Demo</Button>
                                                        </a>
                                                        <a href={data.sourceCode} target="_blank">
                                                            <Button variant="light"><AiFillGithub /> Source Code</Button>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col xs={4}>
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
        </main>
    );
};

export default Projects;