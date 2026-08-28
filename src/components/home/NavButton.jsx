import React from 'react';

const NavButtons = ({ activeSection, setActiveSection }) => {
  return (
    <div className="flex justify-center space-x-4 my-8">
      <button
        onClick={() => setActiveSection('user')}
        className={`px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider shadow-sm transition-all transform active:scale-95 ${
          activeSection === 'user'
            ? 'bg-black text-white ring-2 ring-black shadow-md'
            : 'bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100 hover:border-black'
        }`}
      >
        User Home Sector
      </button>

      <button
        onClick={() => setActiveSection('admin')}
        className={`px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider shadow-sm transition-all transform active:scale-95 ${
          activeSection === 'admin'
            ? 'bg-black text-white ring-2 ring-black shadow-md'
            : 'bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100 hover:border-black'
        }`}
      >
        Admin Home Sector
      </button>
    </div>
  );
};

export default NavButtons;