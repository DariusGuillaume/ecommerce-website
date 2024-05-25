import React from 'react';
import { FaLaptop, FaHeadphones, FaMobile } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="bg-blue-500 shadow-md rounded-lg p-6 flex items-center">
        <div className="mr-4">
          <FaLaptop className="text-4xl text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Laptops</h2>
          <p className="text-white">Discover our wide range of powerful laptops for all your computing needs.</p>
        </div>
      </div>

      <div className="bg-green-500 shadow-md rounded-lg p-6 flex items-center">
        <div className="mr-4">
          <FaHeadphones className="text-4xl text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Headphones</h2>
          <p className="text-white">Experience immersive sound with our premium headphones collection.</p>
        </div>
      </div>

      <div className="bg-purple-500 shadow-md rounded-lg p-6 flex items-center">
        <div className="mr-4">
          <FaMobile className="text-4xl text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Smartphones</h2>
          <p className="text-white">Stay connected with the latest smartphones from top brands.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;