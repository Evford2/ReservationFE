import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function Footer() {
    const navigate = useNavigate();
    
    return <footer className="foot">
        <div className='footerlinks'>
            <CustomLink href="/" className="footerlink">Home</CustomLink>
            <CustomLink href="/#/about" className="footerlink">About</CustomLink>
        </div>
        <div className='footerlinks'>
            <CustomLink href="/#/campsites" className="footerlink">Campsites</CustomLink> 
            <CustomLink href="/#/renfest" className="footerlink">RenFest</CustomLink>
        </div>
        <div className='footerlinks'>
            <CustomLink href="/#/rules" className="footerlink">Rules</CustomLink>
            <CustomLink href="/#/login" className="footerlink">Login/Signup</CustomLink>
        </div>
    </footer>
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

export default Footer;