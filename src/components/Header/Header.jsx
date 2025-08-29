import { motion } from 'framer-motion';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { useLocation } from 'react-router-dom';
import { LandingNav } from '../../pages/landing/LandingNav';
import { LogoutButton } from './components/LogoutButton';
import { UserInfo } from './components/UserInfo';

const headerIconVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 10,
      bounce: 0.6,
      duration: 0.8,
      delay: 1.7,
    },
  },
};

export const Header = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <motion.img
            className="h-10 w-10"
            src="/images/dollar_11218169.png"
            alt="Dollar Icon"
            variants={headerIconVariants}
            initial="hidden"
            animate="visible"
          />
          <h1 className="text-2xl font-bold text-indigo-600">DigiWallet</h1>
        </div>

        {isLanding ? (
          <div className="flex items-center space-x-8">
            <LandingNav />
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <LogoutButton />
              <button className="text-gray-600 hover:text-gray-800 transition-transform duration-200 ease-in-out transform hover:scale-110">
                <BellIcon className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-800 transition-transform duration-200 ease-in-out transform hover:scale-110">
                <Cog6ToothIcon className="h-5 w-5" />
              </button>

              <UserInfo />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
