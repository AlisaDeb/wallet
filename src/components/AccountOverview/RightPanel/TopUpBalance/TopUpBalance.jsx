import React, { useEffect, useState } from 'react';
import { FaCcVisa, FaCcPaypal } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  CURRENCY_SYMBOLS,
  SUPPORTED_CURRENCIES,
} from '../../../../constants/currencies';
import {
  setSelectedCurrency,
  syncWalletToAuth,
  topUpBalance,
} from '../../../../redux/slices/walletSlice';
import { CurrencyAmountInput } from '../../../UI/CurrencyAmountInput';

export const TopUpBalance = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  const isFiatCurrency = ['USD', 'EUR', 'SGD'].includes(currency);

  useEffect(() => {
    dispatch(setSelectedCurrency(currency));
  }, [currency, dispatch]);

  const handleQuickAmount = (value) => {
    setAmount((prev) => parseFloat(prev || '0') + value);
  };

  const handleTopUp = () => {
    if (isNaN(amount) || amount <= 0) {
      toast.warning('Please enter a valid top-up amount.');
      return;
    }
    dispatch(topUpBalance({ amount, currency }));
    dispatch(syncWalletToAuth());
    toast.success(`Successfully topped up your ${currency} wallet`);
    setAmount('');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-indigo-500/25 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Top Up Balance
      </h2>
      <div className="mb-4">
        <CurrencyAmountInput
          label={'Amount'}
          amount={amount}
          setAmount={setAmount}
          currency={currency}
          setCurrency={setCurrency}
          currencies={SUPPORTED_CURRENCIES}
          currencySymbol={CURRENCY_SYMBOLS[currency]}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[100, 500, 1000].map((item) => (
          <button
            key={item}
            onClick={() => handleQuickAmount(item)}
            disabled={!isFiatCurrency}
            className={`whitespace-nowrap py-2 rounded-lg text-sm  ${
              isFiatCurrency
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            + {CURRENCY_SYMBOLS[currency]}
            {item.toLocaleString('en-US')}
          </button>
        ))}
      </div>
      {!isFiatCurrency && (
        <p className="text-xs text-center text-gray-500 mb-4">
          Quick top-up buttons are only available for fiat currencies.
        </p>
      )}
      <button
        onClick={handleTopUp}
        className="!rounded-button whitespace-nowrap w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium cursor-pointer"
      >
        Top Up Now
      </button>
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Payment Methods
        </h3>
        <div className="space-y-2">
          <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="h-8 w-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
              <FaCcVisa />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                Visa ending in 4582
              </p>
              <p className="text-xs text-gray-500">Expires 09/26</p>
            </div>
          </div>
          <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="h-8 w-8 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600">
              <FaCcPaypal />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">PayPal</p>
              <p className="text-xs text-gray-500">john.doe@example.com</p>
            </div>
          </div>
          <button className="!rounded-button whitespace-nowrap flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 cursor-not-allowed">
            <FaPlus className=" mr-2" /> Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};
