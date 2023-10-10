import React from 'react';
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    
    return(
        <div className = 'navbar'>
            <button className='navbtn' onClick={()=>navigate("/")}>Home</button>
            <button className='navbtn'>Menu</button>
            <button className='navbtn'>Locations</button>
            <button className='navbtn'>Rewards</button>
            <button className='navbtn'>About</button>
            <button className='loginbtn'>Login</button>
        </div>
    );
}


export default Navbar;