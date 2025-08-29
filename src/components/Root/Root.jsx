import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Root = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
