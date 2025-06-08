import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectCurrencies } from '../../../redux/slices/currenciesSlice';
import { fetchRates } from '../../../redux/slices/ratesSlice';
import { CurrencyInputBlock } from './components/CurrencyInputBlock';
import { CurrencyQuickSelect } from './components/CurrencyQuickSelect';

export const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('100');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [activeInput, setActiveInput] = useState('from');

  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.currencies.items);
  const { rates, base } = useSelector((state) => state.rates);

  useEffect(() => {
    dispatch(fetchSelectCurrencies());
    dispatch(fetchRates());
  }, [dispatch]);

  const getExchangeRate = (from, to) => {
    if (from === to) return 1;

    const fromLower = from.toLowerCase();
    const toLower = to.toLowerCase();

    if (fromLower === base) {
      return rates[toLower] || 0;
    }
    if (toLower === base) {
      return 1 / (rates[fromLower] || 1);
    }

    return (1 / rates[fromLower]) * rates[toLower] || 1;
  };

  useEffect(() => {
    if (!rates) return;

    const rate = getExchangeRate(fromCurrency, toCurrency);

    if (activeInput === 'from') {
      if (fromAmount === '') {
        setToAmount('');
      } else {
        const result = (parseFloat(fromAmount) * rate).toFixed(2);
        setToAmount(result);
      }
    } else if (activeInput === 'to') {
      if (toAmount === '') {
        setFromAmount('');
      } else {
        const result = (parseFloat(toAmount) / rate).toFixed(2);
        setFromAmount(result);
      }
    }
  }, [fromAmount, toAmount, fromCurrency, toCurrency, activeInput, rates]);

  const handleSwap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);

    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {' '}
        Currency Converter
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <CurrencyInputBlock
          label="From"
          currencies={currencies}
          amount={fromAmount}
          currency={fromCurrency}
          setAmount={(val) => {
            setFromAmount(val), setActiveInput('from');
          }}
          setCurrency={setFromCurrency}
          onFocus={() => setActiveInput('from')}
        />
        <div className="grid justify-center">
          <button
            onClick={handleSwap}
            className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-gray-200 p-3 rounded-md cursor-pointer"
          >
            <ArrowsRightLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <CurrencyInputBlock
          label="To"
          currencies={currencies}
          amount={toAmount}
          currency={toCurrency}
          setAmount={(val) => {
            setToAmount(val), setActiveInput('to');
          }}
          setCurrency={setToCurrency}
          onFocus={() => setActiveInput('to')}
        />
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          1 {fromCurrency} ={' '}
          {(
            (1 / rates[fromCurrency.toLowerCase()]) *
            rates[toCurrency.toLowerCase()]
          ).toFixed(4)}{' '}
          {toCurrency}
        </p>
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
