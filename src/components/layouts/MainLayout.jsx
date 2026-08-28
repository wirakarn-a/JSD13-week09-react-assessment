import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow max-w-7xl w-full mx-auto p-6">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-slate-400 text-center py-4 text-sm border-t border-slate-800">
        © 2026 Generation Thailand - React Assessment Project
      </footer>
    </div>
  );
};

export default MainLayout;