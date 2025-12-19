import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">About</h3>
                        <p className="text-gray-400">Your company description here.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;