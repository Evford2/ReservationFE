import React from 'react'
import placeholder2 from './200pximg.jpg'
import sitemap from './sitemap.jpg'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
export default function Campsites(){
    const navigate = useNavigate();
    return <div>
        <h1></h1>
            <body>
                <div className="siteContainer">
                    <Card img={placeholder2} title="Primative" />
                    <Card img={placeholder2} title="Cabin" />
                    <Card img={placeholder2} title="Camper" />
                </div>
                <div className="reserve-container">
                    <button onClick={() => navigate("/reserve")} className="reserve-btn">Reserve</button>
                </div>
                <div className="siteMap">
                    <img src={sitemap} alt="sitemap"></img>
                </div>


            </body>
        </div>
}