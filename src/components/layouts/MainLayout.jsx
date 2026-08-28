import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-neutral-900 selection:bg-black selection:text-white">
      <Navbar /> {/* การเรียก Navbar ไปแสดงในทุกๆหน้า */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-6">
        <Outlet />
      </main>
      <footer className="bg-black text-neutral-400 text-center py-5 text-xs tracking-wider uppercase border-t border-neutral-900">
        © 2026 Generation Thailand - React Assessment Project
      </footer>
    </div>
  );
};

export default MainLayout;