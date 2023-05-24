import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
 
    return (
      <nav className="flex items-center justify-between px-4 py-3 md:bg-gray-900 md:opacity-70 md:fixed md:z-10 w-full bg-gray-900">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" />
        <span className="text-white ml-2 text-lg font-semibold">Your Logo</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.121 3.707a1 1 0 0 0-1.414 1.414L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879a1 1 0 0 0 0-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2H4zm0 5a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2H4zm0 5a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2H4z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/menu" className="text-white hover:text-gray-300">
              Our Menu
            </a>
          </li>
          <li>
            <a href="/shop" className="text-white hover:text-gray-300">
              Our Shop
            </a>
          </li>
          <li>
            <a href="/signin" className="text-white hover:text-gray-300">
              Sign In
            </a>
          </li>
          <li>
            <a href="/profile" className="text-white hover:text-gray-300">
              <img
                src="/path/to/profile-picture.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 md:hidden absolute z-20 right-0 top-10 w-1/2">
          <ul className="bg-gray-900 py-2 px-4 space-y-2">
            <li>
              <a href="/" className="text-white block">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white block">
                About Us
              </a>
            </li>
            <li>
              <a href="/dashboard" className="text-white block">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white block">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/menu" className="text-white block">
                Our Menu
              </a>
            </li>
            <li>
              <a href="/shop" className="text-white block">
                Our Shop
              </a>
            </li>
            <li>
              <a href="/signin" className="text-white block">
                Sign In
              </a>
            </li>
            <li>
              <a href="/profile" className="text-white block">
                <img
                  src="/path/to/profile-picture.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full inline-block"
                />
                <span className="ml-2">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
        
    );
};

export default Navbar;