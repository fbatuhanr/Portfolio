import React from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {TbWorldWww} from "react-icons/tb";
import {AiFillGithub} from "react-icons/ai";

import rentacarImg from "../assets/projects/rentacar.jpg"
import shoppingcartImg from "../assets/projects/shoppingcart.jpg"
import photogalleryImg from "../assets/projects/photogallery.jpg"
import profilemanagementImg from "../assets/projects/profilemanagement.jpg"
import weatherforecastImg from "../assets/projects/weatherforecast.jpg"
import calculatorImg from "../assets/projects/calculator.jpg"

import {FaBootstrap, FaNodeJs, FaReact} from "react-icons/fa";
import {IoLogoFirebase} from "react-icons/io5";
import {SiAxios, SiFramer, SiMongodb} from "react-icons/si";


const projectsData = [
    {
        title: "Rent a Car",
        description: "Car rental website created by React",
        image: rentacarImg,
        technologies: [<FaReact title="React"/>, <FaBootstrap title="Bootstrap" />],
        liveDemo: "https://rent-a-car-reactjs.vercel.app",
        sourceCode: "https://github.com/fbatuhanr/RentaCar-ReactJS"
    },
    {
        title: "Shopping Cart",
        description: "Shopping Cart is E-commerce website application created by React",
        image: shoppingcartImg,
        technologies: [<FaReact title="React"/>, <FaBootstrap title="Bootstrap"/>],
        liveDemo: "https://shopping-cart-reactjs-seven.vercel.app/",
        sourceCode: "https://github.com/fbatuhanr/shoppingcart-reactjs"
    },
    {
        title: "Photo Gallery",
        description: "A simple Photo Gallery app created with React and Google Firebase!",
        image: photogalleryImg,
        technologies: [<FaReact title="React"/>, <IoLogoFirebase title="Firebase"/>, <SiFramer title="Framer Motion"/>],
        sourceCode: "https://github.com/fbatuhanr/PhotoGallery-ReactJS"
    },
    {
        title: "Profile Management",
        description: "Create your profile and customize your preferences, and browse other created profiles.",
        image: profilemanagementImg,
        technologies: [<FaReact title="React"/>, <FaBootstrap title="Bootstrap"/>, <FaNodeJs title="NodeJs"/>, <SiMongodb title="MongoDb"/>],
        sourceCode: ["https://github.com/fbatuhanr/Profile-Management-Frontend", "https://github.com/fbatuhanr/Profile-Management-Backend"]
    },
    {
        title: "Weather Forecast",
        description: "Weather Forecast application created with React and by using 'openweathermap' and 'geodb-cities' apis.",
        image: weatherforecastImg,
        technologies: [<FaReact title="React"/>, <FaBootstrap title="Bootstrap"/>, <SiAxios title="Axios"/>],
        sourceCode: "https://github.com/fbatuhanr/WeatherForecast-ReactJS"
    },
    {
        title: "Calculator",
        description: "This calculator simple to use and functional also it has full responsive design and it supports keyboard inputs.",
        image: calculatorImg,
        technologies: [<FaReact title="React"/>, <FaBootstrap title="Bootstrap"/>, <SiFramer title="Framer Motion"/>],
        sourceCode: "https://github.com/fbatuhanr/Calculator-ReactJS"
    }
]

const Projects = () => {
    return (
        <section id="projects" className="py-5">
            <Container className="pt-1 px-3 px-md-5 mb-4">
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
                                                {
                                                    data.technologies &&
                                                    (<p>
                                                    <span>Technologies:</span>
                                                        {
                                                            Array.isArray(data.technologies)
                                                                ? data.technologies.map(i => <span>{i} </span>)
                                                                : data.technologies
                                                        }
                                                    </p>)
                                                }
                                                <div>
                                                    {
                                                        data.liveDemo &&
                                                        (Array.isArray(data.liveDemo)
                                                        ?
                                                            data.liveDemo.map(i => <a href={i} target="_blank"><Button variant="dark"><TbWorldWww /> Live Demo</Button></a>)
                                                        :
                                                            <a href={data.liveDemo} target="_blank"><Button variant="dark"><TbWorldWww /> Live Demo</Button></a>)
                                                    }
                                                    &nbsp;
                                                    {
                                                        data.sourceCode &&
                                                        (Array.isArray(data.sourceCode)
                                                            ?
                                                            data.sourceCode.map((i, j) => <><a href={i} target="_blank"><Button variant={data.liveDemo ? "light" : "dark"}><AiFillGithub /> Source Code {j+1}</Button></a>&nbsp;</>)
                                                            :
                                                            <a href={data.sourceCode} target="_blank"><Button variant={data.liveDemo ? "light" : "dark"}><AiFillGithub /> Source Code</Button></a>)
                                                    }
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