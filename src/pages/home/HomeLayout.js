import React, { Component } from 'react';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Reserve from '../../components/Reserve';

class HomeLayout extends Component {
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

export default HomeLayout