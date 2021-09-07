import React from 'react'
import "./Navbar.css"
import { useState } from 'react';
import { useEffect } from 'react';
/**
 * 
 * @returns Navbar component
 */
function Navbar() {
    const [show, setShow] = useState(false);
    /**
     * If there is a scroll in the y axis > 100px, then we set a flag to true
     * Otherwise the flag remains false always
     * Based on the flag we will control when to show the black navbar and when not.
     */
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    let netflixLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png";
    return (
        // Here we will do the check for the navbar
        <div className={`Navbar ${show == true && "showNavbar"}`}>
            <img src={netflixLogo} alt="Netflix Logo" className="Navbar__netflixLogo" />
        </div>
    )
}

export default Navbar
