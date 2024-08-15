import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Swal from 'sweetalert2'

import { FaCirclePlay } from "react-icons/fa6"
import { TbWorldWww } from "react-icons/tb"
import { AiFillGithub } from "react-icons/ai"
import { SiReact, SiNextdotjs, SiTypescript, SiPrisma, SiMongodb, SiTailwindcss, SiFirebase, SiBootstrap, SiNodedotjs, SiAxios, SiFramer, SiExpress, SiSocketdotio, SiRedux, SiJsonwebtokens, SiElectron, SiMysql } from "react-icons/si"

import letschattogetherImg from "../assets/projects/letschattogether.jpg"
import rentacarImg from "../assets/projects/rentacar.jpg"
import smoothlyshoppingImg from "../assets/projects/smoothlyshopping.jpg"
import studentinformationsystemImg from "../assets/projects/studentinformationsystem.jpg"

const projectsData = [
    {
        title: "Let's Chat Together",
        description: "Dynamic chat platform designed for seamless communication, both online and offline. It provides users with a comprehensive suite of features for messaging, managing friends, and handling chat interactions.",
        image: letschattogetherImg,
        video: "https://www.youtube.com/embed/lcwnFk0oD-E?si=HRO-sgoImQaL7jse",
        technologies: [<SiTypescript title="Typescript" />, <SiReact title="React" />, <SiRedux title="Redux" />, <SiNodedotjs title="Node.js" />, <SiSocketdotio title="Socket.io" />, <SiJsonwebtokens className="JSON Web Token" />, <SiExpress title="Express.js" />, <SiMongodb title="MongoDB" />, <SiTailwindcss title="Tailwindcss" />],
        liveDemo: "https://lets-chat-together.vercel.app",
        sourceCode: "https://github.com/fbatuhanr/LetsChatTogether"
    },
    {
        title: "Rent a Car",
        description: "Rent a Car is a web application designed to simplify the process of renting vehicles. The platform allows users to create accounts, browse available cars, make reservations, and manage their bookings with ease. The admin panel provides comprehensive control over vehicle management, locations, and user interactions.",
        image: rentacarImg,
        video: "https://www.youtube.com/embed/d88bX3nsZAQ?si=t27D1CiOYrWDvoWV",
        technologies: [<SiReact title="React" />, <SiFirebase title="Firebase" />, <SiBootstrap title="Bootstrap" />],
        liveDemo: "https://rentacar-reactjs.vercel.app",
        sourceCode: "https://github.com/fbatuhanr/RentaCar-ReactJS"
    },
    {
        title: "Smoothly Shopping",
        description: "E-commerce website using Next.js, Typescript, Prisma, MongoDb, Tailwindcss, Firebase",
        image: smoothlyshoppingImg,
        video: "https://www.youtube.com/embed/SOADBCxLJgg?si=nz14xNy8orM6Iy3x",
        technologies: [<SiNextdotjs title="Next.js" />, <SiTypescript title="Typescript" />, <SiPrisma title="Prisma" />, <SiMongodb title="MongoDB" />, <SiTailwindcss title="Tailwindcss" />, <SiFirebase title="Firebase" />],
        sourceCode: "https://github.com/fbatuhanr/SmoothlyShopping"
    },
    {
        title: "Student Information System",
        description: "It is designed to streamline the administration of school operations, including student and teacher management, class management, canteen module, attendance tracking, and more.",
        image: studentinformationsystemImg,
        video: "https://www.youtube.com/embed/Rxj5hSxSucw?si=tCVu7QmyhxPTo5-T",
        technologies: [<SiReact title="React" />,<SiElectron title="Electron"/>, <SiNodedotjs title="Node.js" />, <SiExpress title="Express.js" />, <SiMysql title="MySQL"/>],
        sourceCode: "https://github.com/fbatuhanr/StudentInformationSystem"
    }
]

const handleProjectVideoPopup = (title, url) => {

    Swal.fire({
        title: `<strong>${title}</strong>`,
        width: 'auto',
        html: `<iframe width="700" height="394" src="${url}&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        confirmButtonText: 'Close'
    })
}

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
                                        <Row className="align-items-center">
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
                                                            data.sourceCode.map((i, j) => <><a href={i} target="_blank"><Button variant={data.liveDemo ? "light" : "dark"}><AiFillGithub /> Source Code {j + 1}</Button></a>&nbsp;</>)
                                                            :
                                                            <a href={data.sourceCode} target="_blank"><Button variant={data.liveDemo ? "light" : "dark"}><AiFillGithub /> Source Code</Button></a>)
                                                    }
                                                </div>
                                            </Col>
                                            <Col xs={3}>
                                                {
                                                    data.video ?
                                                        <div className="video-box w-100 position-relative rounded overflow-hidden"
                                                            onClick={() => handleProjectVideoPopup(data.title, data.video)}>
                                                            <div className="video-box-icon position-absolute z-2 top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center"><FaCirclePlay size={50} color="#ffffff" /></div>
                                                            <div className="video-box-overlay bg-dark opacity-25 position-absolute z-1 top-0 start-0 bottom-0 end-0"></div>
                                                            <img src={data.image} className="img-fluid" />
                                                        </div>
                                                        : <img src={data.image} className="img-fluid rounded" />
                                                }
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