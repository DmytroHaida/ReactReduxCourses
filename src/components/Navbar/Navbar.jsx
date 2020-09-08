import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendBarContainer from './FriendBar/FriendBarContainer';
const Navbar = (props) => {
    return (
        <nav className='nav'>
            
                <NavLink className="navButton" to="/Profile">Profile</NavLink>
                <NavLink className="navButton" to="/Dialogs">Massages</NavLink>
                <NavLink className="navButton" to="/Users">Users</NavLink>
                <NavLink className="navButton" to="/News">News</NavLink>
                <NavLink className="navButton" to="/video">Video</NavLink>
                
                <FriendBarContainer />

        </nav>
    );
}


export default Navbar;