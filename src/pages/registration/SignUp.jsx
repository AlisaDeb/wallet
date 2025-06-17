import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearError } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { loadWallet } from '../../redux/slices/walletSlice';

export const SignUp = ({ switchToLogin, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.error);
  const currentUserId = useSelector((state) => state.auth.currentUserId);
  const users = useSelector((state) => state.auth.users);

  const [name, setName] = useState('');
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
  }, [currentUserId, users, dispatch, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full max-w-sm bg-white shadow-md rounded-lg px-4 py-6 sm:px-5 sm:py-7 flex flex-col gap-4 relative"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="close form"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>

      <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-700">
        Create your account
      </h2>
      <p className="text-center text-gray-500 text-sm">
        Welcome! Please fill in the details to get started
      </p>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete="off"
        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="off"
        className="px-3 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="off"
        className="px-3 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      />

      {error && (
        <div className="text-red-500 text-sm text-center font-medium">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="bg-[#2cd6ab] hover:bg-[#28bc99]  text-white font-semibold py-2.5 rounded-lg text-sm transition duration-200"
      >
        Continue
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <span
          className="text-indigo-600 font-semibold cursor-pointer hover:underline"
          onClick={switchToLogin}
        >
          Sign in
        </span>
      </p>
    </form>
  );
};
