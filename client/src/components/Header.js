import { UserButton } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// ... (import statements)

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <UserButton />
                        <button
                            onClick={toggleMobileMenu}
                            // ... (rest of your button code)
                        >
                            {/* ... (your button content) */}
                        </button>
                    </div>
                    <div className={`hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2" style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    // ... (rest of your NavLink code)
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Contact"
                                    // ... (rest of your NavLink code)
                                >
                                    Contact
                                </NavLink>
                            </li>
                            {/* Add similar NavLink elements for other menu items */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
