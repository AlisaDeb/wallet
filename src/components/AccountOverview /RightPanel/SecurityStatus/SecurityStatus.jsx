import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

export const SecurityStatus = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Security Status</h2>
        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
          Secure
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 text-green-500">
            <FaCircleCheck />
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-700">
              Two-factor authentication enabled
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 text-green-500">
            <FaCircleCheck />
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-700">Password strength: Strong</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 text-green-500">
            <FaCircleCheck />
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-700">Last login: Today, 08:45 AM</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button className="!rounded-button whitespace-nowrap text-sm text-indigo-600 hover:text-indigo-800 flex items-center cursor-pointer">
          <FaShieldAlt className="mr-2" />
          Security Settings
        </button>
      </div>
    </div>
  );
};
