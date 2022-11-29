import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import { faBurger } from "@fortawesome/free-solid-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { faPerson } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./header.css"

const element = <FontAwesomeIcon icon={faBurger} />
const element2 = <FontAwesomeIcon icon={faHouse} />
const element3 = <FontAwesomeIcon icon={faPhone} />
const element4 = <FontAwesomeIcon icon={faCalendar} />
const element5 = <FontAwesomeIcon icon={faPerson} />

const Header = () => {
    const [startDate, setStartDate] = useState(new Date());
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
                <span className="headerReserveText">date</span>
                <DatePicker className="data" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </div>
                <div className="headerReserveItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerReserveText">guests</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header