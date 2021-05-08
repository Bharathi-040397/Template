import React from 'react'
import FeatureCol from './FeatureCol'

function Features() {
    return (
        <div className="row" id="Row_container">
           <div className="col text-center" id="Feature_title">
            <p className="F_title">Course Features</p>
              <FeatureCol
                    img="https://cdn.imgbin.com/7/9/7/imgbin-cartoon-diploma-others-TM0gWSJvd7uFVCHj5Z5nV1sdg.jpg"
                    img2="https://previews.123rf.com/images/lenm/lenm1210/lenm121000138/15774292-mascot-illustration-featuring-a-clipboard-holding-a-pen.jpg"
                    col_name="Duration"
                    col_desc="150 hours of advanced learning"
                    col2_name="Industry Capestone projects"
                    col2_desc="Real time Hand-on Projects"
              />
              <FeatureCol
                    img="https://carlton.ac.in/wp-content/uploads/2015/04/shake-hand-300x232.png"
                    img2="https://previews.123rf.com/images/lenm/lenm1210/lenm121000138/15774292-mascot-illustration-featuring-a-clipboard-holding-a-pen.jpg"
                    col_name="Duration"
                    col_desc="150 hours of advanced learning"
                    col2_name="Learning"
                    col2_desc="Industry base Scenerios"
                />
                <FeatureCol
                    img="http://www.selfhelpmentor.com/wp-content/uploads/2017/01/self-help-tips.png"
                    img2="https://img1.pnghut.com/17/23/19/Wguzaj7Rfi/graduate-certificate-university-graduation-ceremony-square-academic-cap-degree.jpg"
                    col_name="Experienced Trainers"
                    col_desc="Average experience is 20+"
                    col2_name="Get Certificate"
                    col2_desc="Get certificate at the end"
                    />
             </div>
           </div>
        
    )
}

export default Features
