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
                        <div>Would you like to Register to start earning sweet rewards?</div>
                        <button>Yes</button>
                        <button>No</button>
                    </Modal>
                </div>
                
            </div>
        </div>
            
        </>
    )
}
export default ModalComp;