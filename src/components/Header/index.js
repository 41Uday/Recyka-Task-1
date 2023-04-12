import React from "react"

import { Link } from "react-router-dom"

import './index.css'

const Header = ()  => {
    return (
        <nav className="header-container">
            <Link to="/" >
                <img src="https://recykal.com/wp-content/uploads/2022/02/Recykal-Logo_130x30-pix.png" className="header-img-1" alt="logo"  />
            </Link>
            <p className="header-para-1">For Brands</p>
            <p className="header-para-1">For Recyclers</p>
            <p className="header-para-1">For Govt. Agencies</p>
            <p className="header-para-1">For Brands</p>
            <p className="header-para-1">For Brands</p>
            <Link to="/contact">
                <button className="header-button">Contact Us</button>
            </Link>
           
        </nav>
    )
}

export default Header