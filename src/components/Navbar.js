import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    
    return <nav className="nav">
       
        <ul>
            <CustomLink href="/ReservationFE/#/">Home</CustomLink>
            <CustomLink href="/ReservationFE/#/about">About</CustomLink>
            <CustomLink href="/ReservationFE/#/campsites">Campsites</CustomLink> 
            <CustomLink href="/ReservationFE/#/renfest">RenFest</CustomLink>
            <CustomLink href="/ReservationFE/#/rules">Rules</CustomLink>
            
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname

    return(
    <li className={path === href ? "active" : ""}>
        <a href = {href} {...props}>
            {children}
        </a>
    </li>
    )
        
}

export default Navbar;