import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white pt-4 mt-auto">

            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact
                            me</a>
                    </div>
                </div>
            </section>
            <div className="container px-5 py-3">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0">Copyright &copy; Your Website 2023</div>
                    </div>
                    <div className="col-auto">
                        <a className="small" href="#!">Privacy</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="#!">Terms</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;