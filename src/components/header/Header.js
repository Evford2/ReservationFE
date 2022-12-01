import {
    faBurger,
    faHouse,
    faPhone,
    faCalendar,
    faPerson,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css"
import "react-clock/dist/Clock.css"
import "react-datepicker/dist/react-datepicker.css";


import "./header.css"
import { Modal } from "../modal/loginModal";





const Header = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [openOptions,setOpenOptions] = useState(false);
    const [value, onChange] = useState('10:00');
    const [options,setOptions] = useState({
        guests:2,
    });
    
    const handleOption = (name, operation) =>{
        setOptions(prev=>{
            return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
    

   
    return (
        <div className="header">
            <div className="headerContainer">
                
            
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faBurger} />
                <span>Menu</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faPhone} />
                <span>Contact Us</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faMoneyBill} />
                <span>Rewards</span>
                </div>
                
            </div>
            <h1 className="headerTitle">Reserve Your Table Now</h1>
            <p className="headerDesc">
                Beat the crowd and get priority seating any day of the week!
            </p>
            <div className="headerReserve">
                <div className="headerReserveTitle">
                    Enter Reservation Info
                </div>
                <div className="headerReserveItem">
                <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                <span className="headerReserveText">Date</span>
                <DatePicker className="data" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </div>
                
                <div className="headerReserveItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerReserveText">{`${options.guests} guests`}</span>
                        {openOptions &&<div className="options">
                            <div className="optionItem">
                                <span className="optionText"></span>
                                <div className="optionCounter">Guests
                                <button 
                                    className="optionCounterwButton" 
                                    onClick={()=>handleOption("guests","d")}
                                    disabled={options.guests <= 2}>-</button>
                                <span className="optionCounterNumber">{`${options.guests} guests`}</span>
                                <button 
                                    className="optionCounterwButton" 
                                    onClick={()=>handleOption("guests","i")}
                                    disabled={options.guests >= 12}>+</button>
                                </div>
                            </div>
                        </div>}
                        
                </div>
                
                
                <div>
                    <TimePicker onChange={onChange} value={value} />
                </div>
                
            </div>
                
            </div>
            
        </div>
    )
}

export default Header