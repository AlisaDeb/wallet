import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../redux/slices/authSlice';
import { resetWallet } from '../../../redux/slices/walletSlice';

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(resetWallet());
    navigate('/');
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLogout}
        className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 
          text-indigo-600 font-semibold text-sm px-4 py-2 rounded-lg 
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Log out
      </button>
    </div>
  );
};
