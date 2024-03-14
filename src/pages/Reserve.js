import React, { useState , useEffect } from "react";
import axios from "axios";
export default function Reserve(){

const[sites, setsites] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = (await axios.get('/api/sites/reserve')).data
                setsites(data)
            } catch (error) {
                console.log(error)
            }

        })();
        

    }, [])

    return (
    
        <div>
            <h1>Campsite Availabilities</h1>
            <h1>We have {sites.length} campsites available</h1>    

        </div>
        

    )
}

