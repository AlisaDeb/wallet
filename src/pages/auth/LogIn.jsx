import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { loadWallet } from '../../redux/slices/walletSlice';

export const LogIn = ({ switchToRegister, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.error);
  const currentUserId = useSelector((state) => state.auth.currentUserId);
  const users = useSelector((state) => state.auth.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUserId) {
      const currentUser = users.find((u) => u.id === currentUserId);
      if (currentUser) {
        dispatch(loadWallet(currentUser.wallet));
      }
      navigate('/dashboard');
    }
  }, [currentUserId, navigate, dispatch, users]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="relative w-full max-w-md bg-white shadow-md rounded-xl px-6 py-8 flex flex-col gap-5"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="close form"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-2">
        Log in
      </h2>
      <p className="text-center text-gray-500 text-sm">
        Welcome back! Please sign in to continue
      </p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="off"
        className="px-4 py-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="off"
        className="px-4 py-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {error && (
        <div className="text-red-500 text-sm text-center font-medium">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="bg-[#2cd6ab] hover:bg-[#28bc99]  text-white font-semibold py-3 rounded-lg transition duration-200"
      >
        Continue
      </button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <span
          className="text-indigo-600 font-semibold cursor-pointer hover:underline"
          onClick={switchToRegister}
        >
          Sign up
        </span>
      </p>
    </form>
  );
};
