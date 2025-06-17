import React, { useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { BsChatRight } from 'react-icons/bs';
import { HiOutlineOfficeBuilding, HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Company', icon: HiOutlineOfficeBuilding },
  { name: 'Security', icon: FaShieldAlt },
  { name: 'Explore', icon: CiGlobe },
  { name: 'Support', icon: BsChatRight },
];

export const LandingNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="block lg:hidden p-2 text-indigo-600 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <span
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out
            ${menuOpen ? 'rotate-45 top-2.5' : 'top-1'}`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out
            ${menuOpen ? 'opacity-0' : 'top-3'}`}
          />
          <span
            className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out
            ${menuOpen ? '-rotate-45 top-2.5' : 'top-5'}`}
          />
        </div>
      </button>

      <nav className="hidden lg:flex space-x-6 font-semibold text-lg text-indigo-600">
        {navItems.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="relative px-5 py-2 cursor-pointer group overflow-hidden rounded-full flex items-center space-x-2"
          >
            <span className="absolute inset-0 bg-[#34e7ba] rounded-full transform scale-x-0 group-hover:scale-x-110 origin-left transition-transform duration-300 ease-out z-0"></span>
            <Icon className="h-5 w-5 text-white opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out relative z-10" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              {name}
            </span>
          </div>
        ))}
      </nav>

      <div
        className={`absolute top-12 right-0 w-56 bg-white rounded-3xl shadow-lg z-50 flex flex-col p-5 space-y-3 lg:hidden
    transform transition-all duration-300 ease-in-out
    ${
      menuOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-3 pointer-events-none'
    }`}
      >
        {navItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={handleItemClick}
            className="flex items-center space-x-2 text-indigo-600 font-medium hover:bg-[#34e7ba] hover:text-white px-3 py-2 rounded-lg transition-colors duration-300 ease-out"
          >
            <Icon className="h-5 w-5" />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
