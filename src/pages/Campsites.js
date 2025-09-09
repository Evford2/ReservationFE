import React from 'react'
import primsite from './Images/primsite.jpg'
import sitemap from './Images/sitemap.jpg'
import Card from '../components/Card'
import cabin1 from './Images/cabin1.jpg'
import camper from './Images/camper1.jpg'
import { useNavigate } from 'react-router-dom'
import ImageMagnifier from './ImageMagnifier'

export default function Campsites(){
    const navigate = useNavigate();
    return <div>
        <h1></h1>
            <body>
                <div className="siteContainer">
                    <Card img={primsite} title="Primative" />
                    <Card img={cabin1} title="Cabin" />
                    <Card img={camper} title="Camper" />
                </div>
                <div className="reserve-container">
                    <button onClick={() => navigate("/reserve")} className="reserve-btn">Click Here to Reserve!</button>
                </div>
                <div className="siteMap">
                    <img src={sitemap} alt="" />
                </div>


            </body>
        </div>
}