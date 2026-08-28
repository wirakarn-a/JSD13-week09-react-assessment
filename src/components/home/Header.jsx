import React from 'react';

const Header = ({ sector }) => {
  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-black text-black tracking-tight uppercase">
        Generation Thailand
      </h1>
      <div className="mt-3">
        <h2 className="text-xl font-bold text-neutral-600 tracking-wider uppercase border-b-2 border-black inline-block pb-1">
          {sector === 'admin'
            ? 'Home - Admin Sector'
            : sector === 'user'
            ? 'Home - User Sector'
            : 'React - Assessment'}
        </h2>
      </div>
    </div>
  );
};

export default Header;