import React from 'react';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from '/src/Components/Navbar.jsx';

function LocalNavbar() {
    return (
        <>
            <div className="container navbar " data-aos="fade-down" data-aos-duration="1000">
                <div className="left">
                    <h3>Portfolio</h3>
                </div>
                <div className="right">
                    <a href="" className="nav-item">Home</a>
                    <a href="" className="nav-item">About</a>
                    <a href="" className="nav-item">Skills</a>
                    <a href="" className="nav-item">Projects</a>
                    <a href="" className="nav-item">Contact Me</a>
                </div>
            </div>
        </>
    )
}

export default LocalNavbar

