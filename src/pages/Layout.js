import React, { Component } from 'react';

import Header from './home/Header';
import Navbar from './home/Navbar';

class Layout extends Component {
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

export default Layout