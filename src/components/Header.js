import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/" >
                    <img src="./wold.png" alt="" />
                </NavLink>
            </div>
            <ul>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "active" : "")}>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about" className={(nav)=>(nav.isActive ? "active" : "")}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/contacts" className={(nav)=>(nav.isActive ? "active" : "")}>
                    <li>Contacts</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;