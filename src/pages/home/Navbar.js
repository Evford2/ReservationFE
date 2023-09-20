import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div className = 'navbar'>
                <button className='navbtn'>Home</button>
                <button className='navbtn'>Menu</button>
                <button className='navbtn'>Locations</button>
                <button className='navbtn'>Rewards</button>
                <button className='navbtn'>About</button>
                <button className='loginbtn'>Login</button>
            </div>
        )
    }
}

export default Navbar;