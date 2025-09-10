import React from "react";
import "./site.css";
import reservemodal from "./reservemodal";
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
                
                <reservemodal/>
            </div>
        </div>

        
    )


}

export default Site