import React from 'react';
import html from '../images/Html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.png';
import figma from '../images/figma.png';
import python from '../images/python.png';
import react from '../images/react.png';
function Skills() {
    return (
        <>
            <div className="skills">
                <h1>Skills</h1>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="image" data-aos="flip-right" data-aos-duration='1000'>
                                <img className='logo'  src={html} alt="HTML logo" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="image" data-aos="flip-right" data-aos-duration='1000'>
                                <img className='logo'  src={css} alt="CSS logo" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="image" data-aos="flip-right" data-aos-duration='1000'>
                                <img className='logo'  src={js} alt="JavaScript logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="image" data-aos="flip-right" data-aos-duration='1000'>
                                <img className='logo'  src={bootstrap} alt="Bootstrap logo" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="image" data-aos="flip-right" data-aos-duration='1000'>
                                <img className='logo' src={figma} alt="Figma logo" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="image" data-aos="flip-right" data-aos-duration='1000'>
                                <img className='logo'  src={python} alt="Python logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="image mt-5 ms-2" data-aos="flip-right" data-aos-duration='1000'>
                                <img className='logo'  src={react} alt="Python logo" />
                            </div>
                        </div>
                
            </div>
        </>
    );
}

export default Skills;

