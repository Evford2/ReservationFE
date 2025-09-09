import React, { useState , useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Site from "../components/Site";
import placeholder2 from './Images/200pximg.jpg'
import ImageMagnifier from "./ImageMagnifier";
import sitemap from "./Images/sitemap.jpg"


export default function Reserve(){

const[sites, setsites] = useState([])  //sites initialized as an empty array,setsites is a function that can alter the value of
const[loading , setloading] = useState()
const[error , seterror] = useState()

const [PrimisChecked, PrimsetIsChecked] = useState(true)
const [TentisChecked, TentsetIsChecked] = useState(true)
const [CabinisChecked, CabinsetIsChecked] = useState(true)

const PrimcheckHandler = () => {
    PrimsetIsChecked(!PrimisChecked)
    console.log(!PrimisChecked)
}

const TentcheckHandler = () => {
    TentsetIsChecked(!TentisChecked)
    console.log(!TentisChecked)
}

const CabincheckHandler = () => {
    CabinsetIsChecked(!CabinisChecked)
    console.log(!CabinisChecked)
}

    useEffect(() => {
        (async () => {
            try {

                setloading(true)
                    const api = axios.create({
                        baseURL: 'https://reservationfe.onrender.com/api/sites/reserve', // Replace with your actual Render URL
                    });


                const data = (await api.get('  /api/sites/reserve', {params: 
                    {
                        primitive: PrimisChecked,
                        tent: TentisChecked,
                        cabin: CabinisChecked 
                    }
                })).data
                setsites(data)
                setloading(false)

            } catch (error) {

                seterror(true)
                console.log(error)
                setloading(false)

            }

        })();
        

    }, [PrimisChecked, TentisChecked, CabinisChecked]) //runs useEffect each time a box is checked

    return (
    
            
        <div className='reservepage-container'>
            <div className="filter-container">
                
                <div className="filtertype">
                    <label class="checkcontainer">Primitive
                        <input type="checkbox" id="Primitive" checked={PrimisChecked} onChange={PrimcheckHandler}/>
                        <span className="checkmark"></span>        
                    </label>
                    
                </div>

                <div className="filtertype">
                    <label class="checkcontainer">Cabin
                        <input type="checkbox" id="Cabin" checked={CabinisChecked} onChange={CabincheckHandler}/>
                        <span className="checkmark"></span>        
                    </label>
                </div>

                <div className="filtertype">
                    <label class="checkcontainer">Tent
                        <input type="checkbox" id="Tent" checked={TentisChecked} onChange={TentcheckHandler}/>
                        <span className="checkmark"></span>    
                    </label>
                </div>  
                <div className="siteMap">
                    <ImageMagnifier src={sitemap} alt="" />
                </div>
                
                
            </div>
            
            <div className="campsite-container">
                {loading ? (<h1>Loading...</h1>
                ) : error ? (
                    <h1>Error</h1>
                ) : (
                    sites.map(site=> {
                        return <div className="site-row">
                                
                            <Site site = {site}/>
                        </div>;
                            
                }))}

            </div>
        </div>
            


        
        

    )
}

