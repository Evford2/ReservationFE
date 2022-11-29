import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import {faUtensils} from "@fortawesome/free-solid-svg-icons"
import "./navbar.css"

const element = <FontAwesomeIcon icon={faUtensils} />

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Restaurant 42 
                <FontAwesomeIcon icon={faUtensils} />
                </span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar