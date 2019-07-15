import React from 'react'
import {NavLink} from 'react-router-dom'

//Links within the navbar for access to functions.
const UserLinks = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to='/create'>Create Task</NavLink>
            </li>
        </ul>
    )
}

export default UserLinks
