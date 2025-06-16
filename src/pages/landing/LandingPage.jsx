import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-indigo-50 px-4 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen">
        <div
          className="md:w-1/2 flex flex-col py-12 md:py-0
          items-center md:items-start
          text-center md:text-left
        "
        >
          <h1 className="text-3xl md:text-[50px]  font-bold text-indigo-700 mb-6">
            Welcome to DigiWallet
          </h1>
          <p className="text-base md:text-[20px] text-gray-600 mb-8 max-w-md">
            Your personal multi-currency wallet.
            <br /> Fast. Secure. Simple.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 w-full md:w-auto">
            <button className="relative overflow-hidden px-8 py-4 rounded-full text-lg font-semibold text-violet-600 bg-gray-100 border-none">
              <span className="relative z-10">Get Started</span>
              <span
                className="absolute top-0 left-0 h-full w-1/4 rounded-full transition-all duration-[850ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:w-full"
                style={{ backgroundColor: '#34e7ba' }}
              ></span>
            </button>
          </div>
        </div>

        <div className="md:w-3/5 flex justify-center items-center px-4 md:px-0">
          <img
            src="/src/images/Image.png"
            alt="Logo"
            className="object-contain w-full max-w-[700px] max-h-[80vh]"
          />
        </div>
      </div>
    </div>
  );
};
