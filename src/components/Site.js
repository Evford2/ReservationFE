import React from "react";
import "./site.css";
function Site({site}) {


    return(
        <div className="site-container">
            <div className="site-img">
                <img src={site.imageurls[0]} className="small-img" />
            </div>
            <div className="site-body">
                <h1>{site.name}</h1>
                <p>{site.description}</p>
                <p>${site.price}</p>
                <p>Sleeps: ${site.maxcount}</p>
                <button>Reserve</button>
            </div>
        </div>

        
    )


}

export default Site