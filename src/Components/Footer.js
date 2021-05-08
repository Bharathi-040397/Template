import React from 'react'

function Footer() {
    return (
        <div className="row" id="About">
            <div className=" col-sm-12 col-md-8" id="About_left">
            <img  className="footer_img" src="https://tyutee.com/static/media/tyutee-logo.9bd8197c.png" alt=""/>
            <p className="footer_text">The next Gen SaaS based peer to peer student learning, networking and reskilling platform.</p>
            <p className="footer_text" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum aspernatur obcaecati consequatur dolorem ad reprehenderit iste cum laudantium
                odit possimus natus ullam, voluptatibus animi! Aperiam
                hic culpa earum deleniti qui. Nunc, nisl nulla massa mattis quis tellus turpis eros, condimentum.
                Felis vulputate urna sem maecenas orci nec. Donec nec pretium.
            </p>
            <p className="footer_text">With tyutee let's Change the way every Student Networks and Learns on the Go.</p>

            <div id="About_left_footer">
                <div className="footer_icons">
                        <div className="footer_icon">
                          <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="fb"/>  
                   </div>
                        <div className="footer_icon">
                         <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="twittter"/>   
                   </div>
                        <div className="footer_icon">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/youtube_circle-512.png" alt="youtube"/>    
                   </div>
                   
                </div>
                </div>
                <p className="footer_text">With tyutee let's Change the way every Student Networks and Learns on the Go.</p>
                
        </div>
        <div className="col-sm-12 col-md-4" id="About_right">

    
               <div className="footer_add_container">
                   <h5 className="footer_add">Become a Mentor</h5>
                   <h5 className="footer_add">Income Share Agreement</h5>
                   <h5 className="footer_add">Career with us</h5>
                   <h5 className="footer_add">Contact us</h5>
               </div>
              <br/>
           <p className="footer_add">Blog || Privacy policy || Terms</p>
           
       </div>
    </div>
    )
}

export default Footer
