import React from 'react'
import List from './List'

function Payment() {


    return (
        <>
        <div className="row p-5">
           <div className="col-12 text-center">
               <p className="C_title text-center">How to Pay?</p>
           </div> 
        </div>
        <div className="Payment_Container">
        <div className="row row-cols-1 row-cols-md-2 px-2">
            <div className="col mb-4 payment_box" id="payment_left_col">
                <div className="payment_text_Container">
                    <p className="C_title">1 . ISA - Pay Later Study Now </p>
                     <div className="payment_text_main">
                        <List list=" Pay only after you get a job of 5+ LPA"/>
                        <List list="Industry Capstone Projects "/>
                        <List list=" Live Instructor led classes"/>
                        <List list=" Industrial mentorship"/>
                        <List list=" Digital portfolio build"/>
                        <List list="Guaranteed Placements"/>
                        <List list=" Pay 2,36,000 (including GST) post getting placed"/>
                        <List list=" Reserve your seat at 11,800 (Completely refundable post completion of  the course)"/>
                    </div>
                </div>
                <div className="pay_img">
                    <img src="https://i.pinimg.com/736x/31/20/d2/3120d218d3ea8a4476dc10fb282ae0f6.jpg" alt=""/>
                </div>
            </div>
            <div className="col mb-4 payment_box" id="payment_right_col">
            <div className="payment_text_Container">
            <p className="C_title">2 . Study Now With EMI Plans </p>
          
                    <div className="payment_text_main">
                    <List list="Courses at zero cost EMI plan"/>
                    <List list="Tenure options - 3, 6, 9, 12 months"/>
                    <List list="Placement Assistance Add On"/>
                    <div className="payment_text_box">
                        <div className="payment_text_color"></div>
                        <p className="payment_text_list">
                         Placement Assistance Add On
                        </p>
                            <div className="View_but">
                            <button className="btn">View</button>
                          </div>
                       
                    </div>
                    </div>
                        </div>
                        <div className="form_container">
                            
                            <form className="form_div">
                            <p className="C_title pt-2">EMI Calculator</p>
                            <input type="text" className="form-control" placeholder="Amount"/>
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option defaultValue>Tenure</option>
                                <option value="1">3 Months</option>
                                <option value="2">6 Months</option>
                                <option value="3">9 Months</option>
                                <option value="4">12 Months</option>
                                </select>
                                <p className="form_footer pt-2">EMI Amount N/A</p>
    
                            </form>
                        </div>
                        <div className="payment_img_Container">
                            <img src="https://www.pngkey.com/png/detail/418-4189658_our-mission-agile-meeting.png" alt=""/>
                        </div>
            </div>
        </div>
         </div>
         <div className="row p-5">
           <div className="col-12 text-center">
               <p className="C_title">Become a MERN Developer Now!</p>
               <div className="Card_but">
                <button className="btn btn-sm " >Download Program</button>
             </div>
           </div> 
        </div>
         </> 
    )
}

export default Payment
