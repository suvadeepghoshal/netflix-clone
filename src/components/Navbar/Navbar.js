import React from 'react'
import "./Navbar.css"

function Navbar() {
    let netflixLogo = "https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=60";
    return (
        <div className="Navbar">
            <img src={netflixLogo} alt="Netflix Logo" className="Navbar__netflixLogo" />
        </div>
    )
}

export default Navbar
