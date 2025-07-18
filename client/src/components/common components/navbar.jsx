import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <h1>මං ගැන </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;