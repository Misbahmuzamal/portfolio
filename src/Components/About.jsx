import React from 'react'
import img2 from '../images/hero.jpg';
function About() {
    return (
        <>
            <div className="container text-center about" data-aos="zoom-in-down" data-aos-duration='1000'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={img2} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1>About Me</h1>
                        <p>I am an undergraduate student passionate about web development and design. I enjoy creating engaging and user-friendly websites using various technologies. Here are some of my skills:

                            HTML & CSS: Building the structure and styling of web pages.
                            Bootstrap: Creating responsive and visually appealing layouts.
                            JavaScript: Adding interactivity and dynamic content to websites.
                            Figma: Designing user interfaces and prototypes.
                            Python: Writing scripts and developing applications.
                            I am always eager to learn new skills and take on exciting projects.</p>
                    </div>
                    <div className="profile">
                        <a href="https://github.com/Misbahmuzamal" className="btn btn-outline-warning">Visit Github</a>
                        <a href="https://www.linkedin.com/in/misbah-muzamal-594561318/" className="btn btn-outline-warning">Visit Linkedin</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
