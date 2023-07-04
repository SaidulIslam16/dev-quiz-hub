import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-200'>
            <div className='flex justify-between py-4 mx-24'>
                <div className="logo">
                    <h1 className='text-2xl font-bold'>Dev Quiz Hub</h1>
                </div>
                <div className="links">
                    <NavLink className='mx-2' to='/'>Home</NavLink>
                    <NavLink className='mx-2' to='/statistics'>Statistics</NavLink>
                    <NavLink className='mx-2' to='/blog'>Blog</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;