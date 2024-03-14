import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Modal from './Modal';
class Header extends Component { 
    render() {
        return(
        <>
            <div className='pageheader'>
                <Link href="/" className="site-title">Ford Forest</Link>
                <Modal />

            </div>
           </> 
        );
    }
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
export default Header;