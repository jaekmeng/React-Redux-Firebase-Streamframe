import React from 'react'
import {Link} from 'react-router-dom'
import UserLinks from './UserLinks'

//Basic navbar functions to let the user navigate between the pages.
const Navbar = () => {
    return(
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className="brand-logo">Streamframe</Link>
                <UserLinks />
            </div>
        </nav>
    )
}

export default Navbar
