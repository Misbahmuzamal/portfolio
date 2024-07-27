import React from 'react'
import img2 from '../images/hero.jpg';
function About() {
    return (
        <>
            <div className="container text-center about"  data-aos="zoom-in-down" data-aos-duration='1000'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={img2} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laboriosam excepturi laborum fugit corporis tempora officiis pariatur provident. Deserunt dolores velit hic sequi et neque fugit ex impedit, quibusdam veniam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, alias. Odio sequi aut facere ipsum doloribus blanditiis? Repudiandae similique ratione velit sit, rerum repellat reiciendis iusto labore consequuntur atque nemo quam, cupiditate laboriosam. Adipisci delectus nisi architecto totam qui ea?</p>
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
