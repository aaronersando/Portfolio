import { useState } from "react";

function Navigation(){
    return(
        <ul className="nav-ul">
            <li className="nav-li">
                <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#contact">Contact</a>
            </li>

        </ul>
    )
}


function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="fixed inset-x-0">

        </div>
    )
}

export default NavBar;