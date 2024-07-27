import React from 'react';
import pdf from '../pdf/Resume.pdf';
import img1 from '../images/hero.jpg';


function Home() {
    return (
        <div className="container text-center">
            <div className="row home">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right" data-aos-duration="1000">
                    <h1>Hi, I'm Misbah</h1>
                    <h1 className="text-warning">Frontend Developer </h1>
                    <p className="para">
                        My objective is to obtain a position in a dynamic and challenging environment where I can use
                        my educational, organizational, and communicational skills which will foster both personal and
                        professional growth. I want to learn more and more in different fields of computer science. If I get
                        the chance, I'll try my very best to polish my skills.
                    </p>
                    <a href={pdf} download="resume.pdf" className="btn btn-outline-warning m-auto text-white">
                        Download Resume
                    </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-left" data-aos-duration="1000">
                    <img className='img' src={img1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;


