import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../../App.css";

const Header = () => {
  return (
    <header style={{ backgroundColor: 'var(--navy-500)' }} className="py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p style={{ color: 'white' }}>
              Free Shipping Over $100 & Free Returns
            </p>
          </div>
          <div>
            <p style={{ color: 'white', textAlign: 'right' }}>
              Hotline: <a href="tel:1-800-123-4567" style={{ color: 'white' }}>1-800-123-4567</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;