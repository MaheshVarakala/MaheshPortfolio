import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="pl-10 pr-10 pt-4 pb-4 bg-blend-lighten bg-red-950 rounded-4xl shadow-lg shadow-red-500/50 backdrop-blur-md top-4 left-1/2 transform -translate-x-1/2 fixed z-50 max-w-6xl w-full">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <Link to="/" className="text-white text-2xl font-bold hover:text-red-500 transition">
          <p>
            Mahesh <span className="text-red-500">Portfolio</span>
          </p>
        </Link>

        <ul className="flex space-x-4 gap-12">
          <li>
            <a href="/" className="text-white hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="text-white hover:text-red-500">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
