import React from 'react'
import github from '../images/github.png';
import message from '../images/message.jpg';
import insta from '../images/insta.webp';
import linkedin from '../images/linkdn.png';
function Contact() {
    return (
        <>
            <div className="contact mt-5">
                <h1>Contact Me</h1>
                <div className="container text-center mt-5"  data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                           <div className="box">
                            <a href="https://github.com/Misbahmuzamal"><img src={github} alt="" /></a>
                            
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="box">
                            <a href="misbahmuzamal73@gmail.com"><img src={message} alt="" /></a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="box">
                        <a href="https://www.instagram.com/misbahmuzamal/"><img src={insta} alt="" /></a>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="box">
                        <a href="https://www.linkedin.com/in/misbah-muzamal-594561318/"><img src={linkedin} alt="" /></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
