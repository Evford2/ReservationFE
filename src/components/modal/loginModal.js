import React, {useState} from 'react';
import Modal from 'react-modal';
import "./loginmodal.css"



function ModalComp (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
        <div className="reserve">
            <div className="reserveContainer">
                <div className="reservebutton">
                <button className="modalButton" onClick={setModalIsOpenToTrue}>Reserve</button>
            
                    <Modal isOpen={modalIsOpen}>
                
                        <button onClick={setModalIsOpenToFalse} >x</button>
    
                        <div>Register:</div>
                        <div>
                        <label>Email:</label>
                        <input type="text" name="name" />
                        
                        </div>
                        <span>
                        <label>Name:</label>
                        <input type="text" name="name" />
                        <label>Phone:</label>
                        <input type="text" name="name" />
                        </span>
                        <div>
                        <label>Username:</label>
                        <input type="text" name="name" />
                        
                        </div>

                        <div>
                        <label>Password:</label>
                        <input type="password" name="name" />
                        </div>

                        <div>
                        <label>Confirm Password:</label>
                        <input type="password" name="name" />
                        </div>

                        <button>Register</button>
                        
                    </Modal>
                </div>
                
            </div>
        </div>
            
        </>
    )
}
export default ModalComp;