import React from 'react';
import placeholder2 from './Images/200pximg.jpg';
import forest from './Images/forest.jpg'
import camping from './Images/camping.jpg'
import renfest from './Images/renfest.jpg'
export default function Home() {
    return <div>
            <h1 className="header">Minutes from the Texas Renaissance Festival</h1>
                <body>
                    <div className="imgContainer">
                        <img src={forest} alt="forest" width="400" height="400"></img>
                        <img src={renfest} alt="renfest" width="400" height="400"></img>
                        <img src={camping} alt="camping" width="400" height="400"></img>
                    </div>
                    <div className="btnContainer">
                        <img src={placeholder2} alt="200placeholder" width="200" height="200"></img>
                        <img src={placeholder2} alt="200placeholder" width="200" height="200"></img>
                        <img src={placeholder2} alt="200placeholder" width="200" height="200"></img>
                    </div>
            
                </body>
           </div>
}