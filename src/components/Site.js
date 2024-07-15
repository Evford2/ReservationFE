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
            </div>
        </div>

        
    )


}

export default Site