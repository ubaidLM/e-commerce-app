import { UserButton } from '@clerk/clerk-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex bg-[#333] h-18 justify-between'>
            <nav className='flex justify-center items-center'>
                <ul className='flex space-x-4'>
                    <li className='ml-3 text-white'>
                        <NavLink to='/' activeClassName='text-blue-500'>
                            Home
                        </NavLink>
                    </li>
                    <li className='text-white'>
                        <NavLink to='/About' activeClassName='text-blue-500'>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='flex items-center pr-12'>
                <UserButton className='text-white' />
            </div>
        </header>
    );
};

export default Header;
