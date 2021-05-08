import React from 'react'


function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-padding navbar-light  mobile-optimized" id="Header">
        <div className="container-fluid">
            <img src="https://tyutee.com/static/media/tyutee-logo.9bd8197c.png" alt="" className="navbar-brand" id="H_img"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse ml-3" id="navbarResponsive">        
            <div className="navbar-nav ml-md-auto">
               <div className="nav-item dropdown ml-3">
                    <p className="nav-link dropdown-toggle p-2" href="#" id="navbardrop" data-toggle="dropdown">Courses</p>
                </div>
               <div className="nav-item ml-3">
                    <p className="nav-link  p-2">Hiring from Us</p>
                </div>
               <div className="nav-item ml-3 ">
                    <p className="nav-link p-2">Pricing</p>
                </div>
               <div className="nav-item ml-3 ">
                    <p className="nav-link p-2">FAQ</p>
                </div>
               <div className="nav-item ml-3 ">
               <button className="nav-link btn btn-outline-danger mt-1 py-1 px-4" id="H_Button">login</button>
                </div>

            </div>
            </div>
         </div>
            </nav>
    )
}

export default Header
