import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Dev Quiz Hub</h1>
            </div>
            <div className="links">
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;