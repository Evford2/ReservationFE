import React, { useState , useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Site from "../components/Site";
import placeholder2 from './200pximg.jpg'


export default function Reserve(){

const[sites, setsites] = useState([])  //sites initialized as an empty array,setsites is a function that can alter the value of
const[loading , setloading] = useState()
const[error , seterror] = useState()

const [PrimisChecked, PrimsetIsChecked] = useState(true)
const PrimcheckHandler = () => {
    PrimsetIsChecked(!PrimisChecked)
    console.log(!PrimisChecked)
}
const [TentisChecked, TentsetIsChecked] = useState(true)
const TentcheckHandler = () => {
    TentsetIsChecked(!TentisChecked)
    console.log(!TentisChecked)
        
}
const [CabinisChecked, CabinsetIsChecked] = useState(true)
const CabincheckHandler = () => {
    CabinsetIsChecked(!CabinisChecked)
    console.log(!CabinisChecked)
        
}

    useEffect(() => {
        (async () => {
            try {
                
                const params = {
                    primitive: PrimisChecked,
                    tent: TentisChecked,
                    cabin: CabinisChecked
                }
                setloading(true)
                const data = (await axios.get('/api/sites/reserve', {params: 
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
        

    }, [PrimisChecked, TentisChecked, CabinisChecked])

    return (
    
            
        <div className='reservepage-container'>
            <div className="filter-container">
                <div className="filter-prim">
                    <input type="checkbox" id="Primitive" checked={PrimisChecked} onChange={PrimcheckHandler}/>
                    <label For="Primitive">Primitive</label>
                </div>

                <div className="filter-cabin">
                    <input type="checkbox" id="Cabin" checked={CabinisChecked} onChange={CabincheckHandler}/>
                    <label For="Cabin">Cabin</label>
                </div>

                <div className="filter-tent">
                    <input type="checkbox" id="Tent" checked={TentisChecked} onChange={TentcheckHandler}/>
                    <label For="Tent">Tent</label>
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

