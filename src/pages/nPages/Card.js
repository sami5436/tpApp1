import React from 'react';
import './style/Card.css';

function Card(props) {
    return(
       <div className="card">
            <img className="card-image" src={props.imageSrc} alt="Attraction"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.description}</p>
       </div> 
    );
}

export default Card;
