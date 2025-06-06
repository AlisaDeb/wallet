import React from 'react';
import { Outlet } from 'react-router-dom';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

export const Root = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white shadow-sm">
        {' '}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <img
              className="h-10 w-10 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              src="/src/images/dollar_11218169.png"
              alt=""
            />
            <h1 className="text-2xl font-bold text-indigo-600">DigiWallet</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <button
                className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-gray-200 
                text-indigo-600 px-4 py-2 rounded-lg items-center cursor-pointer"
              >
                Sign up{' '}
              </button>
              <button
                className="!rounded-button whitespace-nowrap bg-indigo-600 
              hover:bg-indigo-700 text-white px-4 py-2 
              rounded-lg items-center cursor-pointer"
              >
                Log in
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <BellIcon className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <Cog6ToothIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
