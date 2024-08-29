import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState("false");

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    const navigate = useNavigate();

    const handleWelcome = (e) => {
        e.preventDefault();

        navigate("/welcome");
    }

    const handleProfile = (e) => {
        e.preventDefault();

        navigate("/profile");
    }


    return (

        <nav className="navbar" style={{ position: "fixed" }}>
            <div className="navbar-left">
                <img className="logo" src="./images/logo-1.png" alt="logo" />
            </div>
            <div className="navbar-right">
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
                {showMenu && (
                    <ul className="menu">
                        <li onClick={handleProfile} >Profile</li>
                        <li onClick={handleWelcome}>Home</li>
                        <li>Add Emergency Contact</li>
                        <li>Settings</li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar
