import React from "react";
import "./card.css";
function Card(props){
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.img} />
                <h2 className="card-title">
                    {props.title}
                </h2>
            
            </div>
        </div>
    );
}

export default Card