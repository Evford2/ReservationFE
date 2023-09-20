import React, { Component } from 'react';

class Reserve extends Component {
    render() {
        return(
            <div className='reserve'>
                <p>Save Time by Skipping the Line</p>
                    <form className='reserveInfo'>
                        <label>Name:
                            <input type="text" name="name" />
                        </label>
                        <label>Email:
                            <input type="text" name="email" />
                        </label>
                        <label>Guests:
                            <input type="number" name="guests" />
                        </label>
                    </form>
               
        

            </div>
        )
    }
}

export default Reserve;