import React from 'react'

function List({list}) {
    return (
        <div className="payment_text_box">
        <div className="payment_text_color"></div>
        <p className="payment_text_list">
        {list}
        </p>
     </div>
    
    )
}

export default List
