import React from 'react';
import bookstore from '../images/bookstore.jpg';
import weather from '../images/weather.png';
import password from '../images/password.jpg';
import reportcard from '../images/reportcard.png';
import webdeveloper from '../images/web developer.jpg';
import tictactoe from '../images/tictactoe.png';
function Project() {
    return (
        <>
            <div className="projects mt-5">
                <h1>Projects</h1>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="box" data-aos="flip-left" data-aos-duration='1000'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={bookstore} className="card-img-top" alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">BookStore Website</h5>
                                        <p className="card-text">This Website is made by using html css and css framework bootstrap.</p>
                                        <a href="https://github.com/Misbahmuzamal/Bookstore" className="btn btn-warning text-white">Source code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="box" data-aos="flip-left" data-aos-duration='1000'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={weather} className="card-img-top" alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Weather App</h5>
                                        <p className="card-text">This app is made by using api and JavaScript.</p>
                                        <a href="https://github.com/Misbahmuzamal/javascript-Weather-app" className="btn btn-warning text-white">Source code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="box" data-aos="flip-left" data-aos-duration='1000'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={password} className="card-img-top" alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Password Generator</h5>
                                        <p className="card-text">This website is made by using React.</p>
                                        <a href="https://github.com/Misbahmuzamal/React-PasswordGenerator" className="btn btn-warning text-white">Source code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="box" data-aos="flip-left" data-aos-duration='1000'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={reportcard} className="card-img-top" alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Student ReportCard</h5>
                                        <p className="card-text">This Project is made by using object oriented programming in c++.</p>
                                        <a href="https://github.com/Misbahmuzamal/oop" className="btn btn-warning text-white">Source code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="box" data-aos="flip-left" data-aos-duration='1000'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={webdeveloper} className="card-img-top" alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Web Development</h5>
                                        <p className="card-text">This website is made by using html css and bootstrap.</p>
                                        <a href="https://github.com/Misbahmuzamal/web-development-Techno_web" className="btn btn-warning text-white">Source code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="box" data-aos="flip-left" data-aos-duration='1000'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={tictactoe} className="card-img-top" alt="Card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">Tic Tac Toe game</h5>
                                        <p className="card-text">This game is made by using javascript.</p>
                                        <a href="https://github.com/Misbahmuzamal/javascript-tic-tac-toe" className="btn btn-warning text-white">Source code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;

