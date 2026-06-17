import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {motion} from 'framer-motion'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 px-6 py-4 shadow-2xl">
      <div className="max-w-6xl  mx-auto flex justify-between items-center">
        {/* Logo */} 
        <div className="logo flex my-auto">
 <img src="/dvn.png" alt="logo divinesiontech" className=" w-14 h-15" />
        <Link to="/" className="text-3xl my-2 font-black bg-gradient-to-r from-slate-200 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
       Divinesion
        </Link>
        </div>
          

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-lg font-semibold px-3 py-2 rounded-xl transition-all duration-300 hover:bg-blue-900/50 hover:text-blue-400 border-b-2 ${
                location.pathname === link.path
                  ? "border-blue-400 text-blue-400 bg-blue-900/30 backdrop-blur-sm shadow-lg"
                  : "border-transparent hover:border-blue-500/50 text-slate-300 hover:text-slate-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-slate-900/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7 text-slate-300 hover:text-blue-400" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-slate-300 hover:text-blue-400" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden mt-4 pt-4 border-t border-slate-800/50 backdrop-blur-sm"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-lg font-semibold px-4 py-3 rounded-2xl transition-all duration-300 hover:bg-blue-900/50 hover:text-blue-400 border-l-4 ${
                  location.pathname === link.path
                    ? "border-blue-400 text-blue-400 bg-blue-900/50 backdrop-blur-sm shadow-lg"
                    : "border-transparent hover:border-blue-500/50 text-slate-300 hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
