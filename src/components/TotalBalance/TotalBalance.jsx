import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { SUPPORTED_CURRENCIES } from '../../constants/currencies';
import { setSelectedCurrency } from '../../redux/slices/walletSlice';
import { BalanceDisplay } from './components/BalanceDisplay';
import { FaPaperPlane } from 'react-icons/fa';

const buttonIconVariants = {
  hidden: { opacity: 0, x: -30, y: 30, rotate: -45 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: 'easeIn', delay: 0.7 },
  },
};

export const TotalBalance = () => {
  const dispatch = useDispatch();

  const balances = useSelector((state) => state.wallet.balance);
  const selectedCurrency =
    useSelector((state) => state.wallet.selectedCurrency) || 'USD';

  const selectedBalance = balances[selectedCurrency.toLowerCase()];

  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-indigo-500/25 transition-shadow duration-300 p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-sm font-medium text-gray-500">
                Total Balance
              </h2>
              <div className="flex gap-1">
                {SUPPORTED_CURRENCIES.map((currency) => (
                  <button
                    key={currency}
                    onClick={() => dispatch(setSelectedCurrency(currency))}
                    className={`!rounded-button whitespace-nowrap px-2 py-0.5 text-xs rounded scale-smooth 
                    ${
                      selectedCurrency === currency
                        ? ' bg-indigo-100 text-indigo-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-baseline mt-1">
              <BalanceDisplay
                selectedCurrency={selectedCurrency}
                selectedBalance={selectedBalance}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Account: **** **** **** 4582
            </p>
          </div>
          <button className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center cursor-not-allowed">
            <motion.span
              variants={buttonIconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaPaperPlane className="mr-2" />
            </motion.span>
            Send
          </button>
        </div>
      </div>
    </>
  );
};
