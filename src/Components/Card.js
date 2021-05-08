import React from 'react'

function Card({name,desc}) {
    return (
        <div className="col mb-4">
            <div className="card " id="Card">
                <div className="card-img-overlay">
                <h5 className="card-title" id="card_title">{name}</h5>
                <p className="card-text">{desc}</p>
                </div>
                </div> 
     </div>
    )
}

export default Card
