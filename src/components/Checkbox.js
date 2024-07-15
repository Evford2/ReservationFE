import React from "react";
import { useState } from "react";

export default function Checkbox(props){
    const { currentCategories, categoryQuery } = props
    const [ categories, setCategories ] = useState([
        { label: "Primitive", value: "primitive"},
        { label: "Primitive", value: "primitive"},
        { label: "Primitive", value: "primitive"}
    ])
    const [PrimisChecked, PrimsetIsChecked] = useState(false)
    const PrimcheckHandler = () => {
        PrimsetIsChecked(!PrimisChecked)
        console.log(!PrimisChecked)
    }
    const [TentisChecked, TentsetIsChecked] = useState(false)
    const TentcheckHandler = () => {
        TentsetIsChecked(!TentisChecked)
        console.log(!TentisChecked)
        
    }
    const [CabinisChecked, CabinsetIsChecked] = useState(false)
    const CabincheckHandler = () => {
        CabinsetIsChecked(!CabinisChecked)
        console.log(!CabinisChecked)
        
    }

    return (
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
    )
}