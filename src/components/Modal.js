import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Login/Signup
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <h2 className="modal-header">Welcome!</h2>
            <div className="fname-input register-input">
              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div className="lname-input register-input">
              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname"/>
            </div>
            <div className="email-input register-input">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email"/>
            </div>
            <div className="password-input register-input">
              <label for="pass">Password:</label>
              <input type="password" id="pass" name="pass"/>
            </div>
            <div className="cpassword-input register-input">
              <label for="pass">Confirm Password:</label>
              <input type="password" id="passc" name="passc"/>
            </div>
            <div className="btn-container">
              <div className="submit-btn">
              <button className="submit">Submit</button>
            </div>
            </div>
            
            
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

