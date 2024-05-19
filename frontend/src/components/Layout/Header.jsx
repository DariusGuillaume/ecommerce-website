import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [active, setActive] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // Perform search functionality here based on the search term
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <header className={`fixed top-0 w-full z-10 transition-all duration-300 ${active ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="../../assets/ecommerce-svgrepo-com.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-gray-600">
              Products
            </Link>
            <Link to="/events" className="text-gray-800 hover:text-gray-600">
              Events
            </Link>
            <Link to="/faq" className="text-gray-800 hover:text-gray-600">
              FAQ
            </Link>
          </nav>

          {/* Search Box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <AiOutlineShoppingCart size={30} className="text-gray-800" />
            </Link>
            <Link to="/wishlist">
              <AiOutlineHeart size={30} className="text-gray-800" />
            </Link>
          </div>

          {/* Become Seller Button */}
          <div className="hidden md:block">
            <Link to="/become-seller">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Become a Vendor
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;