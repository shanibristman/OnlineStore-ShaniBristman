import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className={`navbar`}>
            <div className='logo'>
                <Link to="/" className="linkcolor">online store <i className="fa-solid fa-house"></i></Link>
            </div>

        </div >
    )
}
