import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../../App.css";
import { BsSearch, BsHeart, BsPerson, BsCart, BsGrid3X3GapFill,BsChevronDown } from 'react-icons/bs';
import { FaExchangeAlt } from 'react-icons/fa';

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-navy-500 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div>
              <p className="text-white text-right">
                Contact Us: <a href="tel:1-800-123-4567" className="text-white hover:text-navy-200">1-800-123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="bg-navy-500 py-4 border-t border-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xs">
              <div className="flex">
                <input
                  type="text"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  placeholder="Search product here"
                  aria-label="Search product here"
                />
                <span className="inline-flex items-center px-3 bg-yellow-500 border border-l-0 border-gray-300 rounded-r-md">
                  <BsSearch className="text-white text-lg" />
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center">
              <Link to="/" className="text-white hover:text-navy-200">
                Company.
              </Link>
            </h2>

            <div className="flex items-center space-x-6">
              <Link to="/compare" className="flex flex-col items-center text-white hover:text-navy-200">
                <FaExchangeAlt className="text-2xl mb-1" />
                <span className="text-sm">Compare</span>
                <span className="text-sm">Products</span>
              </Link>
              <Link to="/wishlist" className="flex flex-col items-center text-white hover:text-navy-200">
                <BsHeart className="text-2xl mb-1" />
                <span className="text-sm">Wishlist</span>
              </Link>
              <Link to="/login" className="flex flex-col items-center text-white hover:text-navy-200">
                <BsPerson className="text-2xl mb-1" />
                <span className="text-sm">Login</span>
                <span className="text-sm">to My Account</span>
              </Link>
              <Link to="/cart" className="flex items-center text-white hover:text-navy-200">
                <div className="relative">
                  <BsCart className="text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-navy-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">2</span>
                </div>
                <span className="ml-2">$26.73</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-amazongray-100 py-2 border-t border-gray-400">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
      <div className="relative">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <BsGrid3X3GapFill className="text-white h-4 w-4" />
          <span className="text-white hover:text-yellow-500">
            SHOW CATEGORIES
          </span>
          <BsChevronDown className="text-white h-4 w-4" />
        </div>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="/category1"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Category 1
              </a>
              <a
                href="/category2"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Category 2
              </a>
              <a
                href="/category3"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Category 3
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="h-6 w-px bg-gray-400 mx-4"></div>
      <div className="flex space-x-6">
        <NavLink
          to="/"
          exact
          activeClassName="text-yellow-500"
          className="text-white hover:text-yellow-500"
        >
          HOME
        </NavLink>
        <NavLink
          to="/store"
          activeClassName="text-yellow-500"
          className="text-white hover:text-yellow-500"
        >
          STORE
        </NavLink>
        <NavLink
          to="/blogs"
          activeClassName="text-yellow-500"
          className="text-white hover:text-yellow-500"
        >
          BLOGS
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="text-yellow-500"
          className="text-white hover:text-yellow-500"
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Header;
