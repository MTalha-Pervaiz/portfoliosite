import React from 'react';
import { Home, User, Briefcase, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-blue-600">My Portfolio</div>
          {/* Optional: Add a logo image here */}
          {/* <img src="path/to/logo.png" alt="Logo" className="h-8" /> */}
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2 rounded-md">
            <Home size={24} className="mr-2" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2 rounded-md">
            <User size={24} className="mr-2" />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2 rounded-md">
            <Briefcase size={24} className="mr-2" />
            <span>Portfolio</span>
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white transition duration-200 px-4 py-2 rounded-md">
            <ShoppingCart size={24} className="mr-2" />
            <span>Shop</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;