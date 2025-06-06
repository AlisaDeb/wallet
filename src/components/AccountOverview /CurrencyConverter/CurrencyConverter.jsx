import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectCurrencies } from '../../../redux/slices/currenciesSlice';
import { CurrencyInputBlock } from './components/CurrencyInputBlock';
import { CurrencyQuickSelect } from './components/CurrencyQuickSelect';

export const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromAmount, setFromAmount] = useState('100');
  const [toAmount, setToAmount] = useState('');
  const [activeInput, setActiveInput] = useState('from');

  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currencies.items);
  const rates = useSelector((state) => state.rates.rates);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {' '}
        Currency Converter
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <CurrencyInputBlock label="From" currencies={currencies} />
        <div className="grid justify-center">
          <button className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-gray-200 p-3 rounded-md cursor-pointer">
            <ArrowsRightLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <CurrencyInputBlock label="To" currencies={currencies} />
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>1 USD = xxx.xx EUR</p>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="!rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg flex items-center cursor-pointer">
          <ArrowsRightLeftIcon className="w-5 h-5 mr-2" /> Convert & Transfer
        </button>
      </div>
      <CurrencyQuickSelect />
    </div>
  );
};
