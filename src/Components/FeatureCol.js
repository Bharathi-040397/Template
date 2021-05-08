import React from 'react'

function Feature_Col(props) {
    const { img,img2, col_name, col_desc, col2_name, col2_desc } = props;
    return (
        <div className="row" id="Feature_row">
        <div className="col-sm-12 col-md-6 mx-auto Feature_div">
            <div id="box">
                <div id="box_left">
                    <img
                    alt="img"
                    className="Feature_img"
                   src={img} alt=""/>
                </div>
                <div id="box_right">
                <h5>{col_name}</h5>
                <p>{col_desc}</p>
                </div>
            </div>
        </div> 
        <div className="col-sm-12 col-md-6 mx-auto Feature_div">
            <div id="box">
                <div id="box_left">
                    <img
                    alt="img"
                    className="Feature_img"
                    src={img2} alt="" />
                </div>
                <div id="box_right">
                <h5>{col2_name}</h5>
                <p>{col2_desc}</p>
                </div>
            </div>
        </div> 
  
</div> 
    )
}

export default Feature_Col
