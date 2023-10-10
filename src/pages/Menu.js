import React, { Component } from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
class Menu extends Component {
    render() {
        return(
            <div className='layout'>
                {this.props.children}
                <Header/>
                <Navbar/>
                
            </div>
        )
    }
}

export default Menu