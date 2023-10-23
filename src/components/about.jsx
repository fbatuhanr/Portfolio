import React from 'react';

const About = () => {
    return (
        <section className="bg-light py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xxl-8">
                        <div className="text-center my-5">
                            <h2 className="display-5 fw-bolder"><span
                                className="text-gradient d-inline">About Me</span></h2>
                            <p className="lead fw-light mb-4">
                                PROFILE
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
                                <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;