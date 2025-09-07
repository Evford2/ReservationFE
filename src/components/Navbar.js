import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    
    return <nav className="nav">
       
        <ul>
            <CustomLink href="/#/">Home</CustomLink>
            <CustomLink href="/#/about">About</CustomLink>
            <CustomLink href="/#/campsites">Campsites</CustomLink> 
            <CustomLink href="/#/renfest">RenFest</CustomLink>
            <CustomLink href="/#/rules">Rules</CustomLink>
            
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