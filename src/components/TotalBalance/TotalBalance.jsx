import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUPPORTED_CURRENCIES } from '../../constants/currencies';
import { fetchRates } from '../../redux/slices/ratesSlice';
import { BalanceDisplay } from './components/BalanceDisplay';

export const TotalBalance = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const dispatch = useDispatch();
  const balance = useSelector((state) => state.wallet.balance);
  const rates = useSelector((state) => state.rates.rates);

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);

  const getConvertedBalance = () => {
    if (selectedCurrency === 'USD') return balance;

    const rate = rates && rates[selectedCurrency.toLocaleLowerCase()];
    if (!rate) return balance;
    return balance * rate;
  };

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
                    onClick={() => setSelectedCurrency(currency)}
                    className={`!rounded-button whitespace-nowrap px-2 py-0.5 text-xs rounded
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
                getConvertedBalance={getConvertedBalance}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Account: **** **** **** 4582
            </p>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};
