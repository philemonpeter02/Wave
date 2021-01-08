import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className="Card">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Cards
