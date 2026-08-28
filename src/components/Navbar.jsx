import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-wider">
            Wirakarn A.
          </span>
        </div>

        <div className="flex space-x-6 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 border-b-2 border-lime-400 pb-1 transition-all"
                : "text-slate-300 hover:text-white transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/owner"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 border-b-2 border-lime-400 pb-1 transition-all"
                : "text-slate-300 hover:text-white transition-all"
            }
          >
            Owner
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;