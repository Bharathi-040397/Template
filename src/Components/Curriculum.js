import React from 'react'
import Card from './Card'


function Curriculum() {
    return (
       <>
        <div className="row p-5">
           <div className="col-12 text-center">
               <p className="C_title">Course Curriculam </p>
           </div> 
        </div>
        <div className="Card_Container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 pl-2">
            <Card name="Module-1" desc="This is Module"/>
            <Card name="Module-2" desc="This is Module"/>
            <Card name="Module-3" desc="This is Module"/>
            <Card name="Module-4" desc="This is Module"/>
            <Card name="Module-5" desc="This is Module"/>
            <Card name="Module-6" desc="This is Module"/>
            <Card name="Module-7" desc="This is Module"/>
            <Card name="Module-8" desc="This is Module"/>
            <div className="Card_button_container">
                        <img
                            className="Card_img"
                            src="https://as2.ftcdn.net/jpg/01/14/44/11/500_F_114441139_IXGuCcpvowSDL0kvmXzTFkFyOBV3KobT.jpg" alt="" />
                        <div className="Card_but">
                            <button className="btn btn-sm " >Download Program</button>
                        </div>

            </div>
         </div>
         </div>
         </> 
    )
}

export default Curriculum
