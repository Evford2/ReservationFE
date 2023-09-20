import React, { Component } from 'react';

import Header from './home/Header';
import Navbar from './home/Navbar';
import Reserve from './home/Reserve';

class Layout extends Component {
    render() {
        return(
            <div className='layout'>
                {this.props.children}
                <Header/>
                <Navbar/>
                <Reserve/>
            </div>
        )
    }
}

export default Layout