import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LogIn } from '../auth/LogIn';
import { SignUp } from '../registration/SignUp';

export const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openLoginForm = () => {
    setIsLogin(true);
    setShowForm(true);
  };

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);
  const closeForm = () => setShowForm(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-indigo-50 px-4 md:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen w-full">
        <motion.div
          className="md:w-1/3 flex flex-col pt-12 pb-2 pl-10 md:py-0 items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-[50px] font-bold text-indigo-700 mb-6">
            Welcome to DigiWallet
          </h1>

          {!showForm && (
            <>
              <p className="text-base md:text-[20px] text-gray-600 mb-8 max-w-md">
                Your personal multi-currency wallet.
                <br /> Fast. Secure. Simple.
              </p>
              <button
                onClick={openLoginForm}
                className="relative overflow-hidden px-8 py-4 rounded-full text-lg font-semibold text-violet-600 border-none"
                style={{ backgroundColor: '#e8e9eb' }}
              >
                <span className="relative z-10">Get Started</span>
                <span
                  className="absolute top-0 left-0 h-full w-1/4 rounded-full transition-all duration-[850ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:w-full"
                  style={{ backgroundColor: '#34e7ba' }}
                />
              </button>
            </>
          )}

          <AnimatePresence mode="wait">
            {showForm && (
              <motion.div
                key={isLogin ? 'login' : 'signup'}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
                exit={{ opacity: 0, x: -50, transition: { duration: 0.4 } }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                {isLogin ? (
                  <LogIn
                    switchToRegister={switchToRegister}
                    onClose={closeForm}
                  />
                ) : (
                  <SignUp switchToLogin={switchToLogin} onClose={closeForm} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="md:w-2/3 flex justify-center items-center p-4 md:p-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <img
            src="/wallet/images/Image.png"
            alt="Illustration DigiWallet"
            className="object-contain w-full max-w-[90%] md:max-w-full h-auto md:max-h-[90vh]"
          />
        </motion.div>
      </div>
    </div>
  );
};
