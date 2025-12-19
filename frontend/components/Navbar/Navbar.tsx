import React from 'react';

interface NavbarProps {
    title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = 'TechVriksha' }) => {
    return (
        <nav className="shadow-lg bg-[#1a202c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">{title}</h1>
                    <ul className="flex space-x-8">
                        <li>
                            <a 
                                href="/" 
                                className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-medium"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/about" 
                                className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-medium"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/contact" 
                                className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-medium"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;