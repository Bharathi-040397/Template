import React from 'react'



function About() {
    return (
        <div className="row" id="About">
            <div className=" col-sm-12 col-md-8" id="About_left">
                <h5 id="About_left_title">MERN Stack Developer Program</h5>
                <p id="About_left_subtitle">What this Course about ?</p>
                <p id="About_left_content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum aspernatur obcaecati consequatur dolorem ad reprehenderit iste cum laudantium
                    odit possimus natus ullam, voluptatibus animi! Aperiam
                    hic culpa earum deleniti qui. Nunc, nisl nulla massa mattis quis tellus turpis eros, condimentum.
                    Felis vulputate urna sem maecenas orci nec. Donec nec pretium.
                </p>
                <div id="About_left_footer">
                    <p id="About_footer_text"><span>Course Duration : </span> 120 days</p>
                    <p id="About_footer_text"><span>Mode : </span> Online</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-4" id="About_right">
    
               <img id="About_right_img" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="" />
               <button className="btn " id="About_right_button">Enroll Now</button>
               
           </div>
        </div>
    )
}

export default About
