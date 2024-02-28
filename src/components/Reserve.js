import React, { Component } from 'react';
import { useState } from 'react';
function Reserve() {
    
        const [name, setName] = useState("John Doe")
        const [email, setEmail] = useState("jdoe@email.com")
        const [guests, setGuests] = useState("1")
        const click = () => {
            alert(name + email + guests)
        }
        return(
            <div className='reserve'>
                <p>Save Time by Skipping the Line</p>
                    <form className='reserveInfo'>
                        <label>Name:
                            <input value = {name} type="text" name="name" />
                        </label>
                        <label>Email:
                            <input value = {email} type="text" name="email" />
                        </label>
                        <label>Guests:
                            <input value = {guests} type="number" name="guests" />
                        </label>
                    </form>

                <button onClick = {click} className='reserveBtn'>Reserve</button>
        

            </div>
        )
    
}

export default Reserve;