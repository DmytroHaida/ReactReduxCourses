import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <header className='header'>
            <img src="https://img.icons8.com/material/4ac144/256/user-male.png" alt="" width="70px" />
            <div className="loginBlock">
                {props.isAuth 
                ? props.login 
                : <NavLink className='LoginButton' to={'/login'}>Login</NavLink> }
                <div className={"FormControl error logOutButton"} onClick={props.logOut}><img src="https://image.flaticon.com/icons/svg/660/660350.svg" alt="LogOut" title="Log Out" width="15px"/></div>
            </div>
        </header>

    );
}

export default Header;